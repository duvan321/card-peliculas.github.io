/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../css/Card.css";
import img1 from "../img/Pelicula-cuarto.jpg";
import img2 from "../img/Pelicula-fuego.jpg";
import img3 from "../img/Pelicula-hombre.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
function card() {
  /*const img1 =
    "img/Pelicula-cuarto.jpg";
  const img2 =
    "https://1.bp.blogspot.com/-supvJ69D-bs/YGlMB3MOu0I/AAAAAAAAEtM/SWzbnxC6L-M2ytnNdU9sN30eK_I5lFv1QCLcBGAsYHQ/s16000/a-prueba-de-fuego.jpg";
  const img3 =
    "https://i.pinimg.com/736x/f0/19/83/f019837edb4c867da175345763f730a8.jpg";*/

  return (
    <div className="header">
      <h1 className="titulo">Peliculas cristianas</h1>

      <div className="card-container">
        <div className="card">
          <img src={img1} alt="" className="card-img" />

          <h3 className="title">Cuarto de guerra</h3>
          <p className="parrafo">
            Tony y Elizabeth Jordan parecen tenerlo todo: una hija preciosa, una
            casa de sueño y un buen empleo. Sin embargo, la realidad es que su
            matrimonio está fracasado. Tony se regodea en su éxito profesional
            mientras Elizabeth se resigna en su amargura{" "}
            <a
              className="enlace"
              href="https://www.youtube.com/watch?v=zNCKbTFABAc"
              target="_blank"
            >
              Ver pelicula
            </a>
            .
          </p>

          <ul className="pading-C">
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="blanco">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="blanco">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="manoArriba">
              <FontAwesomeIcon icon={faThumbsUp} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faThumbsDown} className="manoAbajo" />
            </li>
          </ul>
        </div>

        <div className="card">
          <img src={img2} alt="" className="card-img" />

          <h3 className="title">A prueba de fuego</h3>
          <p className="parrafo">
            Caleb Holt, un heróico capitán de bomberos quien valora mucho la
            dedicación y servicio al prójimo por encima de todo. Pero la
            relación más importante en su vida, su matrimonio, está a punto de
            desvanecerse como humo. Esta desgarradora historia sigue el deseo de
            un hombre de transformar su vida y su matrimonio a través del poder
            de la fe y siempre llevar a cabo el código de honor del cuerpo de
            bomberos: Nunca dejes a tu socio atrás{" "}
            <a
              className="enlace"
              href="https://www.facebook.com/102329211486481/videos/532728607415026"
              target="_blank"
            >
              Ver pelicula
            </a>
            .
          </p>

          <ul className="pading-H">
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="blanco">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="blanco">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="manoArriba">
              <FontAwesomeIcon icon={faThumbsUp} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faThumbsDown} className="manoAbajo" />
            </li>
          </ul>
        </div>
        <div className="card">
          <img src={img3} alt="" className="card-img" />

          <h3 className="title">Hasta el ultimo hombre</h3>

          <p className="parrafo">
            La película está basada en la historia real del soldado del Ejército
            de EE. UU. Desmond Doss, un cristiano Adventista del Séptimo día,
            que se negó a portar armas en el frente, fue objeto de burla y
            persecución y que, a pesar de aquello, fue condecorado con la
            Medalla de Honor por el presidente Harry S. Truman, por haber
            salvado la vida a más de setenta y cinco hombres bajo el constante
            fuego enemigo en el acantilado de Maeda durante la brutal batalla de
            Okinawa, en la Segunda Guerra Mundial
            <a
              className="enlace"
              href="https://www.tokyvideo.com/es/video/hasta-el-ultimo-hombre-completa-en-espanol"
              target="_blank"
            >
              Ver pelicula
            </a>
          </p>

          <ul className="h-t">
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="blanco">
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li className="blanco">
              <FontAwesomeIcon icon={faStar} />
            </li>

            <li className="manoArriba">
              <FontAwesomeIcon icon={faThumbsUp} />
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faThumbsDown} className="manoAbajo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default card;
