import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render(){
    return(
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&family=Red+Rose:wght@500&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}