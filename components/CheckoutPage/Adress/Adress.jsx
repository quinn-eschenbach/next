import React, { useEffect } from 'react'
import { Typography, TextField } from "@material-ui/core"
import { useAdress } from "./../../../lib/context/adress";
import styles from './Adress.module.css'

const Adress = ({ setValid }) => {
    const {
        fname,
        lname,
        adress_line_1,
        adress_line_2,
        city,
        state_,
        postcode,
        country,
        handleInput,
        validation
    } = useAdress()

    const checkValid = () => {
        console.log (validation)
        setValid(validation.length == 0)
    }

    useEffect(() => {
        syncValues()
        checkValid()
    }, [fname,
        lname,
        adress_line_1,
        adress_line_2,
        city,
        state_,
        postcode,
        country])

    const syncValues = () => {
        document.getElementById('fname').value = fname
        document.getElementById('lname').value = lname
        document.getElementById('adress_line_1').value = adress_line_1
        document.getElementById('adress_line_2').value = adress_line_2
        document.getElementById('city').value = city
        document.getElementById('state').value = state_
        document.getElementById('postcode').value = postcode
        document.getElementById('country').value = country
    }

    const handleChange = event => {
        handleInput(event.target)
    }


    return (
        <div className={styles.wrapper}>
            <Typography variant="h3">Ihre Adresse</Typography>
            <form className={styles.form} >
                <TextField variant="outlined" required id="fname" label="First Name" onChange={handleChange} error={validation.includes("fname")}/>
                <TextField variant="outlined" required id="lname" label="Last Name" onChange={handleChange} error={validation.includes("lname")} />
                <TextField variant="outlined" required id="adress_line_1" label="Adress" onChange={handleChange} error={validation.includes("adress_line_1")} />
                <TextField variant="outlined" id="adress_line_2" label="Adress Field 2" onChange={handleChange} />
                <TextField variant="outlined" required id="city" label="City" onChange={handleChange} error={validation.includes("city")} />
                <TextField variant="outlined" required id="state" label="State" onChange={handleChange} error={validation.includes("state")} />
                <TextField variant="outlined" required id="postcode" label="Postcode" onChange={handleChange} error={validation.includes("postcode")}/>
                <TextField variant="outlined" required id="country" label="Country" onChange={handleChange} error={validation.includes("country")} />
            </form>
        </div>
    )
}

export default Adress
