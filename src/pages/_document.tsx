import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDoc extends Document {
  public static async getInitialProps (ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }

  public render () {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000"/>
          {/* <!-- Your data here --> */ }
          <link rel="icon" href="/favicon.ico"/>
          <meta name="description" content="Software Engineer resume"/>
          <meta name="author" content="Jose Salcido"/>

          {/* Font Awesome */ }
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
          {/* Global CSS */ }
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossOrigin="anonymous"
          />
          {/* Bootstrap */ }
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            type='text/css'
          />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDoc
