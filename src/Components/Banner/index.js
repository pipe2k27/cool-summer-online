import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaSwimmingPool } from 'react-icons/fa';
import { IoIosConstruct } from 'react-icons/io'
import ControlledCarousel from "../Carousel";
import { RiWhatsappFill } from 'react-icons/ri';
import ToolipBS from "../TooltipBs";
import TooltipBS from "../TooltipBs";

const Banner = () => {

  return (
    <div>
      <div className="banner1 center">
        <div className="mainBG">
          <img className="main-banner" src={process.env.PUBLIC_URL + "/images/water-20.gif"}></img>
          <img className="main-logo" src={process.env.PUBLIC_URL + "/images/logo-no-letters.png"}></img>
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
          Contamos con más de 20 años de experiencia, un gran equipo de trabajo, para la realización de cada trabajo, maquinarias de primer nivel y sobre todo, pasión por lo que hacemos.
          Brindamos asesoramiento e ideas revolucionarias y modernas. Contamos con accesorios de ultima generación, tanto para la construcción como para la refacción y modernización de la pileta, y estamos muy atentos a las nuevas tendencias y novedades del mercado.

        </p>
      </div>
      <TooltipBS />
      <ControlledCarousel />
    </div>
  );
};

export default Banner;
