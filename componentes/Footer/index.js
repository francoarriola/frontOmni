import Styles from "./index.module.scss";
import Image from "next/image";
import logoFsa from "../../public/Logos/logo2fsaaa.png";

function Footer() {
  const phoneNumber = "+5493417194094";
  const waText =
    "Hola, estoy en contacto con usted a traves de la web de Omnifit.";

  return (
    <>
      <div className={Styles["fondo"]}>
        <p>
          ©Copyright FSAdev
          <br />
          Actualizacion 2022
        </p>
        <a
          href={"https://wa.me/" + phoneNumber + "/?text=" + waText}
          target="_blank"
        >
          <Image
            src={logoFsa}
            width={200}
            heigth={150}
            className={Styles["logo"]}
            alt="footer"
          ></Image>
        </a>
      </div>
    </>
  );
}

export default Footer;
