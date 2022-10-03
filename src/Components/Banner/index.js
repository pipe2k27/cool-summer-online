import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaSwimmingPool } from 'react-icons/fa';
import { IoIosConstruct } from 'react-icons/io'
import ControlledCarousel from "../Carousel";

const Banner = () => {

  return (
    <div>
      <div className="banner1 center">
        <div className="mainBG">
          <img className="main-banner" src={process.env.PUBLIC_URL + "/images/water-20.gif"}></img>
          <img className="main-logo" src={process.env.PUBLIC_URL + "/images/logo.png"}></img>
          <h1>CONSTRUÍ TU PROPIO ESTILO</h1>
          <h2>Disfrutalo a tu manera</h2>
          <div className="main-btn-container">
            <div className="main-btn">
              <IoIosConstruct className="main-btn-icon" />
              <h3>Construcción</h3>
            </div>
            <div className="main-btn">
              <FaSwimmingPool className="main-btn-icon" />
              <h3>Revestimientos</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mainText">
        <h2 style={{ marginBottom: 20 }}>
          ¿Qué hacemos?
        </h2>
        <p>
          Somos una empresa, con una vasta experiencia y trayectoria en el mercado de la construcción, refacción y modernización de piletas.
          Contamos con más de 20 anos de experiencia, un gran equipo de trabajo, para la realización de cada trabajo,  maquinarias de primer nivel y sobre todo, pasión por lo que hacemos.
          Brindamos asesoramiento e ideas revolucionarias y modernas, contamos con accesorios de ultima generación, tanto para la construcción como para la refacción y modernización de la pileta y estamos muy atentos a las nuevas tendencias y novedades del mercado.

        </p>
      </div>
      <ControlledCarousel/>
      {/* <div className="banner2 center">
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
      </div> */}
    </div>
  );
};

export default Banner;
