import React from 'react';
import '../public/css/plugins.css';
import '../public/css/main.css';
import '../public/css/loaders/loader.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />

      <Script src="/js/libs.min.js" strategy="beforeInteractive" />
      <Script src="/js/gallery-init.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
      <Script src="https://server.fillout.com/embed/v1/" />
    </>
  );
}

export default MyApp;
