import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9D0625'
        },
        secondary: {
            main: '#000000'
        },
        text : {
            primary: "#000000",
            secondary: "#FFFFFF"
        }
    },
    typography: {        
        h1: {
            fontFamily: "Playfair Display"
        },
        h2: {
            fontFamily: "Playfair Display"
        },
        h3: {
            fontFamily: "Playfair Display"
        },
        h4: {
            fontFamily: "Playfair Display"
        },
        h5: {
            fontFamily: "Playfair Display"
        }
    },
    overrides: {
        MuiButton: {
            label:{
                padding: "8px"
            }
            
        }
    }
})

export default theme