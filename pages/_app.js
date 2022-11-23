import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Omnifit Gym Gimnasio en Concordia, Entre Rios</title>
        <meta
          name="description"
          content="Gimnasio Premium de +1000m2 con sala de Musculacion, Box de Crossfit y Box Funcional Hiit en Concordia"
        />
        <link rel="icon" href="/logofavicon.png" key="desc" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
