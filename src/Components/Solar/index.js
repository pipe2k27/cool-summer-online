import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Solar = () => {
  return (
    <div>
      <h1 className="text-center" style={{ marginTop: 40 }}>
        Calefacción Solar
      </h1>
      <div className="text-center">
        <p className="icons">
          <i class="fas fa-sun"></i>
        </p>
      </div>

      <div className="banner-construccion center">
        <img
          src={process.env.PUBLIC_URL + "/images/solar1.jpg"}
          className="const-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/solar2.jpg"}
          className="const-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/solar3.jpg"}
          className="const-photo"
        ></img>
      </div>
      <div className="center text-holder">
        <img
          src={process.env.PUBLIC_URL + "/images/solarLogo.png"}
          className="solarLogo center"
        ></img>
        <h2 className="text-center" style={{ marginBottom: 20 }}>
          Climatizá tu pileta con energía solar!
        </h2>
        <p className="text-center paragraph">
          Empezá a disfrutar tu pileta desde septiembre.
        </p>

        <p className="text-center paragraph">
          Nuestros colectores cuentan con garantía certificada, son livianos,
          flexibles y se adaptan de acuerdo a la disposición de área de techo.
        </p>
        <p className="text-center paragraph">
          Tienen una vida útil de más de 15 años y son combinables con sistemas
          convencionales de gas y electricidad.
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

export default Solar;
