import '@/styles/globals.scss'
import Script from 'next/script'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(<>
   <Script src="https://cdn.tailwindcss.com" />
  <Component {...pageProps} />
  </>) 
}