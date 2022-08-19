import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Luces = () => {
  return (
    <div>
      <h1 className="text-center" style={{ marginTop: 40 }}>
        Luminaria y controladoras inteligentes.
      </h1>
      <div className="text-center">
        <p className="icons">
          <i class="fas fa-lightbulb"></i>
        </p>
      </div>

      <div className="banner-construccion center">
        <img
          src={process.env.PUBLIC_URL + "/images/luces1.jpg"}
          className="const-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/luces2.jpg"}
          className="const-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/luces3.jpg"}
          className="const-photo"
        ></img>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/hydronics.png"}
        className="center"
        style={{ marginTop: 40 }}
      ></img>
      <div className="center text-holder">
        <p className="text-center paragraph">
          controle sus luces y sistema de filtrado, desde una simple App en su
          teléfono, Tecnologia e innovación en las controladoras y Estética,
          simpleza y potencia en luminarias.
        </p>
        <p className="text-center paragraph">
          Ilumine su pileta al ritmo de su música y haga único cada encuentro
          con amigos.
        </p>
      </div>
      <div className="buttonw3 center buttonw3-width">
        <a href="https://api.whatsapp.com/send?phone=5491144949207&text=Buen%20día,%20te%20hago%20una%20consulta:">
          <i class="fab fa-whatsapp"></i> Contactanos por whatsapp!
        </a>
      </div>
    </div>
  );
};

export default Luces;
