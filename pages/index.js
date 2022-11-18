import Home from "../componentes/Home";
import About from "../componentes/About";
import Open from "../componentes/Open";
import Price from "../componentes/Price";
import Focus from "../componentes/Focus";
import Contact from "../componentes/Contact";
import Footer from "../componentes/Footer";
import Head from "next/head";
const Welcome = () => {
  return (
    <>
      <Head>
        <title>
          Omnifit Gym │ Gimnasio en Concordia │ Sala de Musculacion │ Crossfit │
          Hiit
        </title>
        <meta
          name="description"
          content="Gimnasio Premium de +1000m2 con sala de Musculacion, Box de Crossfit y Box Funcional Hiit en Concordia"
        />
        <link rel="icon" href="/logofavicon.png" key="desc" />
      </Head>
      <Home></Home>
      <About></About>
      <Open></Open>
      <Price></Price>
      <Focus></Focus>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Welcome;
