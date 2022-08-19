import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div>
      <div className="banner3 center">
        <img
          src={process.env.PUBLIC_URL + "/images/logo3.png"}
          className="banner2-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/babysafe.png"}
          className="banner2-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/hydronics.png"}
          className="banner2-photo"
        ></img>
      </div>
      <div className="center banner4">
        <img
          src={process.env.PUBLIC_URL + "/images/banner5.jpg"}
          className="banner4-photo center"
        ></img>
        <div style={{ padding: 10 }}>
          <h2 className="text-center" style={{ marginBottom: 20 }}>
            ¿Por qué Cool Summer?
          </h2>
          <p className="text-center paragraph">
            Desde hace más de 20 años que construimos piletas en zona Norte,
            dedicando especial atención a cada detalle y manteniendo una
            relación precio calidad de primer nivel en el mercado.
          </p>
          <p className="text-center paragraph">
            Buscamos la perfección en nuestros trabajos a fin de poder entregar
            a cada cliente, la pileta que proyecto en su imaginación,
            manteniendo un dialogo amistoso a fin de interpretar cada una de las
            necesidades y conformando de ese modo un excelente espacio de
            trabajo, una agradable relación y brindando un buen servicio post
            venta.
          </p>
          <p className="text-center paragraph">
            Nuestra visión es la de ver disfrutar a cada familia de un espacio
            de relax único, para cada necesidad, a fin de que puedan vivir
            momentos únicos y refrescantes.
          </p>
        </div>
      </div>
      <div className="buttonw2 center buttonw2-width">
        <a href="https://api.whatsapp.com/send?phone=5491144949207&text=Buen%20día,%20te%20hago%20una%20consulta:">
          <i class="fab fa-whatsapp"></i> Contactanos por whatsapp!
        </a>
      </div>
    </div>
  );
};

export default Banner2;
