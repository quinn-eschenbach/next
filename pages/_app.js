import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core'
import theme from "./../styles/theme"
import Navbar from './../components/Navbar/Navbar'
import {ProvideCart} from './../lib/context/cart'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <ProvideCart>
          <Component {...pageProps} />
        </ProvideCart>        
    </ThemeProvider>
  )
}

export default MyApp
