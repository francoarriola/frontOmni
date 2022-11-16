import Styles from "./index.module.scss";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";

function Price() {
  const [mpUrl, setMpUrl] = useState(null);
  const [show, setShow] = useState(false);

  const pagar = () => {
    (async () => {
      const data = await fetch("https://backomniweb.herokuapp.com/payment", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const content = await data.text();

      const contentparse = JSON.parse(content);
      const url = contentparse.init_point;
      if (url) {
        setMpUrl(url);
        window.location.href = url;
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
                <br /> Acompañamiento de nuestro Coach.
                <br /> Horarios libres de entreno.
                <br /> 6 dias a la semana.
                <br /> Full clases incluidas.
              </Card.Text>
              <Card.Footer className={Styles["tarjeta-footer"]}>
                <h3>$163</h3>
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
                <br></br>
                Planificacion personalizada en la
                <br />
                actividad que elijas.
                <br />
                Horarios Fijos.
                <br />
                Dias limitados.
              </Card.Text>
              <Card.Footer className={Styles["tarjeta-footer"]}>
                <h3>$140</h3>
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
            Cuota valida por el mes actual comenzando desde el dia que se abona,
            una vez realizado el pago accedes a la cuota PASE LIBRE. Tu cuota
            finaliza el mismo dia que abonaste. A entrenar!!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => pagar()}
            className={Styles["botonmodal"]}
          >
            ACEPTO
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Price;
