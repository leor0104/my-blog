import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
              <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
                {/** FavIcon */}
                {/** WebFont */}
                {/** stylesheets */}
                {/** scripts */}
              </Head>
              <body className="my-body-class">
                <Main />
                <NextScript />
              </body>
            </Html>
            )
  }
}

            export default MyDocument
