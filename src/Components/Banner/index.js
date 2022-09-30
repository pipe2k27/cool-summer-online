import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaSwimmingPool } from 'react-icons/fa';
import { IoIosConstruct } from 'react-icons/io'

const Banner = () => {
  return (
    <div>
      <div className="banner1 center">
        {/* <div className="center-all">
          <h1 className="text-center">PILETAS A MEDIDA!</h1>
          <p className="text-center">
            Tené rápido tu pileta con excelente calidad y al mejor precio!
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/sombrilla.png"}
            className="center flag"
          ></img>
          <a
            className="buttonw center buttonw-width"
            href="https://api.whatsapp.com/send?phone=5491144949207&text=Buen%20día,%20te%20hago%20una%20consulta:"
          >
            <i class="fab fa-whatsapp"></i> Contactanos por whatsapp!
          </a>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/pool.png"}
            className="banner-pic center"
          ></img>
        </div> */}
        <div className="mainBG">
          <img className="main-banner" src={process.env.PUBLIC_URL + "/images/water-20.gif"}></img>
          {/* <h1 className="text-center">PILETAS A MEDIDA!</h1> */}
          <img className="main-logo" src={process.env.PUBLIC_URL + "/images/logo.png"}></img>
          <h1>CONSTRUÍ TU PROPIO ESTILO</h1>
          <h2>Disfrutalo a tu manera</h2>
          <div className="main-btn-container">
            <div className="main-btn left">
              <IoIosConstruct className="main-btn-icon"/>
              <h3>Construcción</h3>
            </div>
            <div className="main-btn right">
              <FaSwimmingPool className="main-btn-icon"/>
              <h3>Revestimientos</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="banner2 center">
        <img
          src={process.env.PUBLIC_URL + "/images/banner.JPG"}
          className="banner-photo b1"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/banner2.jpg"}
          className="banner-photo b2"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/banner4.jpg"}
          className="banner-photo b4"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/images/banner3.jpg"}
          className="banner-photo b3"
        ></img>
      </div>
      <div style={{ width: "90%", maxWidth: 600 }} className="center">
        <h2 className="text-center" style={{ marginBottom: 20 }}>
          ¿Qué hacemos?
        </h2>
        <p className="text-center">
          Nos dedicamos a la construcción de piletas desde hace más de 20 años,
          y ofrecemos variedad de accesorios para mejorar su calidad. Ademas de
          la construcción de piletas a medida, entre otras cosas ofrecemos
          luminaria y controladores inteligentes de Hydronics y cercos para
          pileta Baby Safe.
        </p>
      </div>
    </div>
  );
};

export default Banner;
