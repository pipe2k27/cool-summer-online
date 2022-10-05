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

      <div className="text-holder">
        <p className="paragraph">
          Nos destacamos por construir piletas con la más alta teconología.
        </p>
        <p className="paragraph">
          Se realizara la excavación en forma manual o con maquina. Se
          confeccionara un entramado de hierro aletados de 6 mm formando una
          malla soldada, cubriendo piso, paredes, vereda perimetral y solario de
          igual sección e idéntica armadura, el piso y los chanfles se
          hormigonaran en un espesor uniforme de 15 cm.
        </p>

        <h2>
          Hormigón proyectado
        </h2>
        <p className="paragraph">
          Sistema constructivo monolítico de hormigón proyectado H30 y
          estructura de acero compuesta por hierros de 10mm, 8mm y mallas
          electrosoldadas de 6mm, con equipos y terminaciones de primera
          calidad.
        </p>
        <h2>
          Hormigón Armado
        </h2>

        <p className="paragraph">
          Se confeccionara una columna central a lo largo de la pileta y tres
          columnas a lo ancho (en forma de costillas) para darle mayor firmeza a
          la estructura de hierro de la superficie total de la pileta. A un
          metro de profundidad desde el nivel superior hasta la altura de 90 cm.
          Se realizara una viga perimetral donde se asentaran ladrillos en forma
          de panderete cumpliendo la función de encofrado perdido, entre dicho
          encofrado y el suelo natural se hará una colada de hormigón.
        </p>
        <p className="paragraph">
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
