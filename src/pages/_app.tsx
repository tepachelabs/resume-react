import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script src="/assets/fontawesome/js/all.min.js" />
            <Component {...pageProps} />
        </>
    )
}