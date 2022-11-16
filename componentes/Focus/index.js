import Styles from "./index.module.scss";
import Image from "next/image";

function Focus() {
  const phoneNumber = "+5493455282930";
  const waText = "Hola, quiero un dia de prueba!!!";
  return (
    <div className={Styles["back"]}>
      <div className={Styles["fondo"]}>
        <div className={Styles["div"]}>
          <h1>
            UN EQUIPO 100%
            <br />
            ENFOCADO EN VOS
          </h1>
          <a href={"https://wa.me/" + phoneNumber + "/?text=" + waText}>
            <button type="button" className={Styles["button"]}>
              QUIERO UN DIA DE PRUEBA
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Focus;
