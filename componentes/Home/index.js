import Styles from "./index.module.scss";
import Image from "next/image";
import smithTatuaje from "../../public/Images/Principal.png";
import logoFullBlanco from "../../public/Logos/Logo blanco.png";
import { useState } from "react";
import Link from "next/link";

function Home() {
  return (
    <div className={Styles["base"]}>
      <div className={Styles["background"]}>
        <div className={Styles["nav"]}>
          <Image
            src={logoFullBlanco}
            alt="logo"
            width={300}
            height={250}
            className={Styles["imglogo"]}
          />
          <div>
            <Link href="../institute">
              <span className={Styles["navlink"]}>OMNI INSTITUTE </span>
            </Link>
            {/* <Link href="/form">
              <span className={Styles["navlink"]}>Sobre nosotros </span>
            </Link> */}
          </div>
        </div>
        <div className={Styles["home"]}>
          <h1 className={Styles["empezar"]}>
            ESTAS A<br />
            UN PASO
            <br />
            DE COMENZAR
            <br />A ENTRENAR.
          </h1>
          <Image
            src={smithTatuaje}
            alt="Musculacion"
            width={600}
            height={500}
            className={Styles["img"]}
            priority="true"
          />
        </div>
        <a href="#price">
          <button type="button" className={Styles["button"]}>
            EMPEZAR
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
