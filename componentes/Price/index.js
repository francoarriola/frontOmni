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
    <>
      <div className={Styles["background"]}>
        <h1 id="price">NUESTROS PLANES</h1>
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
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => pagar()}>
            ACEPTO
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Price;
