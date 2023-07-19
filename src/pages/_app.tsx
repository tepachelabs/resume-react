import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Script from 'next/script'

import '../../public/assets/css/orbit-6.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <div className={ roboto.className }>
      <Script src="/assets/fontawesome/js/all.min.js"/>
      <Component { ...pageProps } />
    </div>
  )
}
