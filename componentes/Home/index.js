import Styles from "./index.module.scss";
import Image from "next/image";
import smithTatuaje from "../../public/Images/Principal.png";
import logoFullBlanco from "../../public/Logos/Logo blanco.png";
import { useState } from "react";

function Home() {
  return (
    <>
      <div className={Styles["background"]}>
        <div className={Styles["nav"]}>
          <Image src={logoFullBlanco} alt="logo" width={300} height={250} />
        </div>
        <div className={Styles["home"]}>
          <h1 className={Styles["title"]}>
            ESTAS A<br />
            UN PASO
            <br />
            DE COMENZAR
            <br />A ENTRENAR.
          </h1>
          <Image
            src={smithTatuaje}
            alt="SmithTrainning"
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
    </>
  );
}

export default Home;
