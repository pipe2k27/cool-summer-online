import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ControlledCarousel from "../Carousel";

const Construccion = () => {

  const construccionImages = ["/images/construc1.jpg", "/images/construc2.jpg", "/images/construc3.jpg", "/images/construc4.jpg", "/images/construc5.jpg", "/images/construc6.jpg", "/images/construc7.jpg"]

  return (
    <div>
      <div>
        <ControlledCarousel array={construccionImages} vof={true} titulo="CONSTRUCCIÓN" />
        {/* <div className="titleContain">
          <h1 className="mainTitle">
            CONSTRUCCIÓN
          </h1>
        </div> */}
      </div>

      <div className="mainText">
        <h2>
          HORMIGÓN PROYECTADO
        </h2>
        <p>
          Este sistema es mas rapido y brinda una solidez superior al tradicional mixto de ladrillo y hormigón armado
          Al ser proyectado en la totalidad de la superficie en un solo día (en el espacio de un  par de horas) brinda una estructura monolitica de hormigon a toda la pileta.
          El hormigon h30 que se utiliza para la construcción, es preparado en la planta de fabricacion por computadoras y procesado para ser transpotado y utilizado en la superficie de metros prevista.
          La estructura dela pileta, esta armada con doble maya de hierros, de 6mm y de 8mm, que recubre toda la superficie, se prepara in situ, según los requerimientos del terreno (no se colocan mayas armadas estandar), en COOL SUMMER le brindamos especial dedicacion y cuidado a este y cada uno de los detalles que hacen de su pileta un producto de exelencia y calidad superior al estandar.
          Las otras piletas son parecidas, las nuestras son unicas!!!
        </p>
      </div>
    </div>
  );
};

export default Construccion;
