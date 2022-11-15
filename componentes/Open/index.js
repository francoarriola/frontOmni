import Image from "next/image";
import Styles from "./index.module.scss";
import logoNegro from "../../public/Logos/logogris3.png";

function Open() {
  return (
    <div className={Styles["back"]}>
      <div className={Styles["background"]}>
        <Image
          src={logoNegro}
          alt="Omni"
          width={450}
          height={80}
          className={Styles["img"]}
        />
        <h1 className={Styles["text"]}>Lunes a Viernes</h1>
        <h2 className={Styles["text2"]}>8:00 a 22:00</h2>
        <h1 className={Styles["text"]}>Sábados</h1>
        <h2 className={Styles["text2"]}>9:00 a 13:00</h2>
      </div>
    </div>
  );
}

export default Open;
