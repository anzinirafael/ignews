import './../styles/global.scss';
import { AppProps } from 'next/app';
import {Header} from './../src/Components/Header'
import {Provider as NextAuthProvider} from 'next-auth/client'

function MyApp({ Component, pageProps } : AppProps) {
  
  return(
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      
    </NextAuthProvider>
  )
}

export default MyApp

