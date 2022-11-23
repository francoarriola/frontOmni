import "bootstrap/scss/bootstrap.scss";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key="title">
          Omnifit Gym, Gimnasio en Concordia, Entre Rios
        </title>
        <meta
          key="description"
          name="description"
          content="Gimnasio Premium de +1000m2 con sala de Musculacion, Box de Crossfit y Box Funcional Hiit en Concordia"
        />
        <meta
          property="og:title"
          content="Omnifit Gym, Gimnasio en Concordia, Entre Rios"
        />
        <meta
          property="og:description"
          content="Gimnasio en la ciudad de Concordia,Entre Rios"
        />
        <link rel="icon" href="/logofavicon.png" key="desc" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
