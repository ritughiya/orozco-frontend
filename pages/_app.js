import '../styles/globals.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Script id="analytics1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CR253G8DRR`}
      />
  
      <Script id="analytics2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-CR253G8DRR');
        `}
      </Script>
      
  
      <Component {...pageProps} />
    </>
  );
}

export default MyApp


