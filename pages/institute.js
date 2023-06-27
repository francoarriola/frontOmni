import Styles from "./institute.module.scss";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import logoFullBlanco from "../public/Logos/institute.png";
import vale from "../public/Images/valeEspalda.jpg";
import abdominal from "../public/Images/abdominal.jpg";
import pesoMuerto from "../public/Images/pesomuerto.jpg";
import Link from "next/link";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const institute = () => {
  return (
    <div className={Styles["fondo"]}>
      <div className={Styles["body"]}>
        <div className={Styles["nav"]}>
          <div>
            <Image src={logoFullBlanco} alt="logo" width={180} height={50} />
          </div>
          <div>
            <Link href="/form">
              <Button className={Styles["button3"]}>INSCRIPCION</Button>
            </Link>
          </div>
        </div>
        <div className={Styles["nav2"]}>
          <div>
            <h1 className={Styles["h1"]}>
              Personal Trainer e Instructor de Musculación
            </h1>
            <h3 className={Styles["h3"]}>
              Formate como Pofesional del Fitness
              <span>Impulsà tu Vocacion </span>
            </h3>
            <p>
              <strong>Este Curso es para vos</strong> <br />
              Si sos Estudiante de Educacion Fisica, si queres armar tus propios
              entrenamientos, si te apasiona el entrenamiento y queres
              insertarte en este campo laboral, si ya sos entrenador y queres
              actualizar y profundizar tus conocimientos, si deseas tener
              herramientas actuales para acompañar a tus alumnos.
              <br /> Al finalizar el examen del curso accedes a una{" "}
              <strong>doble certificacion.</strong> Instructor en Musculacion y
              Personal Trainer certificados por el Omni Institute y por la
              Secretaria de Deporte de Concordia, E.R.
              <br /> Contenidos actualizados: todos nuestros cursos se basan en
              la <strong> informacion cientifica mas actualizada </strong>
              sumada a nuestra <strong> experiencia </strong>, de mas de 20
              años, como entrenadores y capacitadores.
            </p>
            <Link href="/">
              <Button className={Styles["button2"]}>VOLVER</Button>
            </Link>
          </div>
          <div>
            {/* <Image
              className={Styles["img"]}
              src={vale}
              alt="vale"
              width={500}
              height={650}
            /> */}
            <Carousel interval={2000}>
              <Carousel.Item>
                <Image
                  className={Styles["img"]}
                  src={vale}
                  alt="first slide"
                  width={500}
                  height={650}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className={Styles["img"]}
                  src={pesoMuerto}
                  alt="second slide"
                  width={500}
                  height={650}
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className={Styles["img"]}
                  src={abdominal}
                  alt="third slide"
                  width={500}
                  height={650}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default institute;
