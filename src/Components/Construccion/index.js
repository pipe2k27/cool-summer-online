import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ControlledCarousel from "../Carousel";

const Construccion = () => {

  const construccionImages = ["/images/const4.jpg", "/images/const5.jpg", "/images/const6.jpg", "/images/const1.jpg", "/images/const3.jpg", "/images/const9.jpg"]

  return (
    <div>
      <div>
        <ControlledCarousel array={construccionImages} className="hola" />
        <div className="titleContain">
          <h1 className="mainTitle">
            CONSTRUCCIÓN
          </h1>
        </div>
      </div>

      <div className="mainText">
        <p>
          Nos destacamos por construir piletas con la más alta teconología.
          Se realizará la excavación en forma manual o con maquina. Se
          confeccionara un entramado de hierro aletados de 6 mm formando una
          malla soldada, cubriendo piso, paredes, vereda perimetral y solario de
          igual sección e idéntica armadura, el piso y los chanfles se
          hormigonaran en un espesor uniforme de 15 cm.
        </p>

        <h2>
          HORMIGÓN PROYECTADO
        </h2>
        <p className="paragraph">
          Este sistema es mas rapido y brinda una solidez superior al tradicional mixto de ladrillo y hormigón armado
          Al ser proyectado en la totalidad de la superficie en un solo día (en el espacio de un  par de horas) brinda una estructura monolitica de hormigon a toda la pileta.
          El hormigon h30 que se utiliza para la construcción, es preparado en la planta de fabricacion por computadoras y procesado para ser transpotado y utilizado en la superficie de metros prevista.
          La estructura dela pileta, esta armada con doble maya de hierros, de 6mm y de 8mm, que recubre toda la superficie, se prepara in situ, según los requerimientos del terreno (no se colocan mayas armadas estandar), en COOL SUMMER le brindamos especial dedicacion y cuidado a este y cada uno de los detalles que hacen de su pileta un producto de exelencia y calidad superior al estandar.
          Las otras piletas son parecidas, las nuestras son unicas!!!
        </p>
        <h2>
          HORMIGÓN ARMADO
        </h2>

        <p >
          Se confeccionara una columna central a lo largo de la pileta y tres
          columnas a lo ancho (en forma de costillas) para darle mayor firmeza a
          la estructura de hierro de la superficie total de la pileta. A un
          metro de profundidad desde el nivel superior hasta la altura de 90 cm.
          Se realizara una viga perimetral donde se asentaran ladrillos en forma
          de panderete cumpliendo la función de encofrado perdido, entre dicho
          encofrado y el suelo natural se hará una colada de hormigón.
        </p>
        <p>
          En las paredes y el piso se realizara un azotado de hidrófugo y se
          revocara listo para pintar. La vereda perimetral será de 50 cm. De
          ancho en todo el perímetro de la pileta asentada en cemento y cal
          sobre el hormigón realizado, el ancho de la vereda que supere los 50
          cm. Se considerara como solario. El solario tendrá la misma armadura y
          sección que el resto de la estructura.
        </p>
      </div>
    </div>
  );
};

export default Construccion;
