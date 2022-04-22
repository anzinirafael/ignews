import './../styles/global.scss';
import { AppProps } from 'next/app';
import {Header} from './../src/Components/Header'

function MyApp({ Component, pageProps } : AppProps) {
  
  return(
    <>
      <Header />
      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp

