import React, { useState, useContext, createContext, useEffect } from 'react'

const adressContext = createContext()

export function ProvideAdress({ children }) {
    const adress = useProvideAdress()
    return <adressContext.Provider value={adress}>{children}</adressContext.Provider>
}

export const useAdress = () => {
    return useContext(adressContext)
}

function useProvideAdress() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [adress_line_1, setAdress_line_1] = useState('')
    const [adress_line_2, setAdress_line_2] = useState('')
    const [city, setCity] = useState('')
    const [state_, setState_] = useState('')
    const [postcode, setPostcode] = useState('')
    const [country, setCountry] = useState('')
    const [validation, setValidation] = useState([])

    useEffect(() => {
        validate()
    }, [])

    const handleInput = (target) => {
        const { id, value } = target
        switch (String(id)) {
            case "fname":
                setFname(value)
                validate()
                break;
            case "lname":
                setLname(value);
                validate()
                break;
            case "adress_line_1":
                setAdress_line_1(value);
                validate()
                break;
            case "adress_line_2":
                setAdress_line_2(value);
                validate()
                break;
            case "city":
                setCity(value);
                validate()
                break;
            case "state":
                setState_(value);
                validate()
                break;
            case "postcode":
                setPostcode(value);
                validate()
                break;
            case "country":
                setCountry(value);
                validate()
                break;
            default: () => { }
        }

    }
    const validate = () => {
        let error = []
        const array = [fname, lname, adress_line_1, city, state_, postcode, country]
        const names = ["fname", "lname", "adress_line_1", "city", "state", "postcode", "country"]
        array.forEach((item, index) => {
            if (item.length < 1) {
                error.push(names[index])
            }
        })
        setValidation(error)
    }

    return {
        fname,
        lname,
        adress_line_1,
        adress_line_2,
        city,
        state_,
        postcode,
        country,
        validation,
        handleInput
    }
}