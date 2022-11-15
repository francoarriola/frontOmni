import Form from "react-bootstrap/Form";
import Styles from "./form.module.scss";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import logoFullBlanco from "../public/Logos/Logo blanco.png";
import Link from "next/link";
import emailjs from "emailjs-com";
import React, { useState, useRef } from "react";

const form = () => {
  const form = useRef();

  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(false);
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_crlu8t4",
        "template_m42921a",
        form.current,
        "WCPhhofnn0vZwn7Na"
      )
      .then(
        (res) => {
          console.log(res);
          setShowMessage(true);
        },
        (err) => {
          console.log(err);
          setError(true);
        }
      );
  }

  return (
    <div className={Styles["fondo"]}>
      <div className={Styles["body"]}>
        <div className={Styles["logocentrado"]}>
          <Image
            src={logoFullBlanco}
            alt="logo"
            width={300}
            height={250}
            className={Styles["logo"]}
          />
        </div>
        <Form ref={form} onSubmit={enviarEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tu Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              name="user_name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tu Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="mail@ejemplo.com"
              name="user_email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tu Whatsapp</Form.Label>
            <Form.Control type="number" name="user_wpp" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Que actividad queres hacer?</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>
          <div className={Styles["buttonsgroup"]}>
            <Button className={Styles["button"]} type="submit" value="Send">
              ENVIAR
            </Button>
            <Link href="/">
              <Button className={Styles["button2"]}>VOLVER</Button>
            </Link>
          </div>
        </Form>
        {showMessage ? (
          <div className="alert alert-success col-md-5 mx-auto" role="alert">
            Email Enviado Correctamente!!
          </div>
        ) : (
          " "
        )}

        {error ? (
          <div className="alert alert-danger col-md-5 mx-auto" role="alert">
            Tu Email no pudo ser enviado
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default form;
