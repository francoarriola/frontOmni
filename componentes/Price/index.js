import Styles from "./index.module.scss";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";

function Price() {
  const [mpUrl, setMpUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pagar = () => {
    setIsLoading(true);
    (async () => {
      const data = await fetch(
        "https://backomni-production.up.railway.app/payment",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const content = await data.text();

      const contentparse = JSON.parse(content);
      const url = contentparse.init_point;
      if (url) {
        setMpUrl(url);
        window.location.href = url;
      } else {
        alert("hubo un error");
        setIsLoading(false);
      }
    })();
  };

  return (
    <div className={Styles["fondo"]}>
      <div className={Styles["background"]}>
        <h1 className={Styles["planes"]} id="price">
          NUESTROS PLANES
        </h1>
        <div className={Styles["flex"]}>
          <Card className={Styles["tarjeta"]}>
            <Card.Body className={Styles["tarjeta-cuerpo"]}>
              <Card.Title className={Styles["tarjeta-titulo"]}>
                PASE LIBRE <br></br>MENSUAL
              </Card.Title>
              <Card.Text className={Styles["tarjeta-text"]}>
                Planificacion personalizada.
                <br /> Acompañamiento de
                <br /> nuestros Coachs.
                <br /> Horarios libres de entreno.
                <br /> 6 dias a la semana.
                <br /> 15 clases incluidas.
                <br /> Acceso a 1000m2 de gimnasio.
              </Card.Text>
              <Card.Footer className={Styles["tarjeta-footer"]}>
                <h3>$240</h3>
                <h4>POR DIA</h4>
              </Card.Footer>
              <a>
                <button
                  type="button"
                  className={Styles["button"]}
                  onClick={() => setShow(true)}
                >
                  ADHERIRME
                </button>
              </a>
            </Card.Body>
          </Card>
          <Card className={Styles["tarjeta"]}>
            <Card.Body className={Styles["tarjeta-cuerpo"]}>
              <Card.Title className={Styles["tarjeta-titulo"]}>
                PASE INDIVIDUAL <br></br>MENSUAL
              </Card.Title>
              <Card.Text className={Styles["tarjeta-text"]}>
                Planificacion personalizada en la
                <br />
                actividad que elijas.
                <br />
                Horarios Fijos.
                <br />
                Dias limitados.
                <br />
                Reservas limitadas.
              </Card.Text>
              <Card.Footer className={Styles["tarjeta-footer"]}>
                <h3>$210</h3>
                <h4>POR DIA</h4>
              </Card.Footer>
              <Link href="/form">
                <button type="button" className={Styles["button"]}>
                  CONSULTAR
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className={Styles["modal-all"]}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            className={Styles["modal-title"]}
          >
            Pase Libre Omni
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className={Styles["modal-footer"]}>
            Te estas sumando a nuestro Pase Libre, tenes acceso a la sala de
            Musculacion de Lunes a Sabados y todas las clases incluidas.Este
            pago te habilita a entrenar por 30 dias a partir del momento en que
            lo abonas.Acepta para redirigirte al pago a traves de MercadoPago.
            <br /> A entrenar!!
          </p>
        </Modal.Body>
        <Modal.Footer>
          {isLoading ? (
            <div className={Styles["loader-flex"]}>
              <p>Redirigiendo...</p>
              <div className={Styles["spinner"]} />
            </div>
          ) : (
            <Button
              variant="primary"
              onClick={() => pagar()}
              className={Styles["botonmodal"]}
            >
              ACEPTO
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Price;
