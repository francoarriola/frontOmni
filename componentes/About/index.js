import Styles from "./index.module.scss";
import Image from "next/image";
import staffCompleto from "../../public/Images/staff.jpg";
import Link from "next/link";
import Head from "next/head";

function About() {
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
      <div className={Styles["fondo"]}>
        <div className={Styles["container"]}>
          <Image
            src={staffCompleto}
            alt="staff"
            width={650}
            height={400}
            className={Styles["img"]}
          />

          <div>
            <p className={Styles["texto"]}>
              Veni, seguime. Te muestro como Vamos a Mejorar tu rendimiento
              deportivo
              <br />
              Tenemos todo para cambiar y mejorar en todos los sentidos Tù
              <span> experiencia</span> con el deporte.
              <br />
              Somos mas de <span> 20</span> profesionales a tu disposición.
              <br />
              Somos cientos de rutinas adaptadas a cada deporte y a cada
              necesidad.
              <br />
              Somos cientos de objetivos.
              <br />
              Somos Muchos que somos felices haciendo de Omni TU espacio.
              <br />
              Nuestro Fuerte es la <span>Fuerza</span>, nuestros salónes de
              musculación equipados y distribuidos para asegurar tu evolución y
              la máxima comodidad Siempre.
              <br /> Nuestras clases grupales, siempre persiguiendo ese objetivo
              individual con espacio exclusivo para dar confianza a tu
              experiencia.
              <br /> Nuestro Box de Crossfit con la posibilidad de ingresar al
              deporte y aprenderlo desde cero. <br />
              Todo esta pensado para que tu Experiencia en el Gym sea Grata
              comoda y Segura desde el minuto Uno.
              <br />
              Vení a probar y empezá a ser feliz En este lugar pensado para
              <span> TODOS</span>
              <br />
              Animate, estamos muy cerca tuyo.
            </p>
            <Link href="/form">
              <button type="button" className={Styles["button"]}>
                CONTACTARME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
