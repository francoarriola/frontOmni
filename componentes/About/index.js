import Styles from "./index.module.scss";
import Image from "next/image";
import staffCompleto from "../../public/Images/staff.jpg";
import Link from "next/link";

function About() {
  return (
    <>
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
              Tenemos todo para cambiar y mejorar en todos los sentidos Tú
              experiencia con el deporte.
              <br />
              Somos mas de veinte profesionales a tu disposición.
              <br />
              Somos cientos de rutinas adaptadas a cada deporte y a cada
              necesidad.
              <br />
              Somos cientos de objetivos.
              <br />
              Somos Muchos que somos felices haciendo de Omni TU espacio.
              <br />
              Nuestro Fuerte es la Fuerza, nuestros salónes de musculación
              equipados y distribuidos para asegurar tu evolución y la máxima
              comodidad Siempre.
              <br /> Nuestras clases grupales, siempre persiguiendo ese objetivo
              individual con espacio exclusivo para dar confianza a tu
              experiencia.
              <br /> Nuestro Box de Crossfit con la posibilidad de ingresar al
              deporte y aprenderlo desde cero. <br />
              Todo esta pensado para que tu Experiencia en el Gym sea Grata
              comoda y Segura desde el minuto Uno.
              <br />
              Vení a probar y empezá a ser feliz En este lugar pensado para
              TODOS⁣
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
