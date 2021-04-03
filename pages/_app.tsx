// https://nextjs.org/docs/advanced-features/custom-app

import App from 'next/app';
import React from 'react';

export default({Component, pageProps})=>(
     <Component {...pageProps}/>
)

