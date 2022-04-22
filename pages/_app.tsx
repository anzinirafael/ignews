import './../styles/global.scss';
import { AppProps } from 'next/app';
import {Header} from './../src/Components/Header'

function MyApp({ Component, pageProps } : AppProps) {
  
  return(
    <>
      <Component {...pageProps} />
      <Header />
    </>
  )
}

export default MyApp

