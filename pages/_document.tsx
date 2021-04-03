
//https://nextjs.org/docs/advanced-features/custom-document

import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheets} from '@material-ui/core';
import React from 'react'
class MyDocument extends Document{
    static async getInitialProps(ctx) {
         //Render the app and get the context of the page with collected side effects
         const sheets = new ServerStyleSheets();
         const orginalRenderPage = ctx.renderPage;
         ctx.renderPage = () => orginalRenderPage({enhanceApp:(App) => (props) => sheets.collect(<App {...props}/>) })




        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps,styles:[...React.Children.toArray(initialProps.styles), sheets.getStyleElement()] }
    }
    render(){
        return(
            <Html>
                <Head />
                <body>
                  <Main />
                  <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;