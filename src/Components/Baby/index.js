import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Baby = () => {
  return (
    <div>
      <h1 className="text-center" style={{ marginTop: 40 }}>
        Cercos para pileta Baby Safe
      </h1>
      <div className="text-center">
        <p className="icons">
          <i class="fas fa-baby"></i>
          <i class="fas fa-swimmer"></i>
        </p>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/babysafe.png"}
        className="center logo-safe"
        style={{ marginTop: 40 }}
      ></img>

      <div className="banner-baby center">
        <img
          src={process.env.PUBLIC_URL + "/images/baby4.jpg"}
          className="baby-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/baby5.jpg"}
          className="baby-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/baby6.jpg"}
          className="baby-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/baby7.jpg"}
          className="baby-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/baby8.jpg"}
          className="baby-photo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/baby9.jpg"}
          className="baby-photo"
        ></img>
      </div>
      <div className="center text-holder">
        <h2 className="text-center" style={{ marginBottom: 20 }}>
          Tranquilidad para vos y tu familia.
        </h2>
        <p className="text-center paragraph">
          Fabricamos e instalamos cercos removibles para piletas desde hace 20
          años. Nuestra amplia trayectoria nos abala, prestamos atención a cada
          detalle del producto y en la estética de su casa, siempre cuidando la
          vida y resguardando la seguridad de nuestros niños.
        </p>
        <p className="text-center paragraph">
          Nos adaptamos a los espacios y tenemos una amplia variedad de tamaños
          y colores.{" "}
        </p>
        <p className="text-center paragraph">
          Contamos con personal capacitado para la instalación del producto y
          prestamos especial atención al cuidado del espacio de trabajo,
          buscando la perfección en cada detalle.{" "}
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

export default Baby;
