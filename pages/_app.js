import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core'
import theme from "./../styles/theme"
import Navbar from './../components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>      
    </ThemeProvider>
  )
}

export default MyApp
