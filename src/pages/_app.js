import Theme from "../styles/theme";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SL1YQ9EW16"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments);
          gtag('js', new Date())
          
          gtag('config', 'G-SL1YQ9EW16');
          `}
      </Script>
    </>
  );
}
