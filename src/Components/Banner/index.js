import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { RiToolsFill } from 'react-icons/ri';
import { TbShovel } from 'react-icons/tb';
import ControlledCarousel from "../Carousel";

const Banner = () => {

  const bannerImages = ["/images/piletaBC1.JPG","/images/banner.JPG", "/images/banner2.JPG", "/images/banner3.JPG"]

  return (
    <div>
      <div className="banner1">
        <div className="mainBG">
          <span className="mainOverlay"></span>
          <img className="main-banner" src={process.env.PUBLIC_URL + "/images/water-20.gif"}></img>
          <img className="main-logo" src={process.env.PUBLIC_URL + "/images/logo-no-letters.png"}></img>
          <h1>CONSTRUÍ TU PROPIO ESTILO</h1>
          <h2>Disfrutalo a tu manera</h2>
          <div className="main-btn-container">
            <Link className="mainLink" to={"/construccion"}>
              <div className="main-btn">
                <TbShovel className="main-btn-icon" />
                <h3>Construcción</h3>
              </div>
            </Link>
            <Link className="mainLink" to={"revestimientos"}>
              <div className="main-btn">
                <RiToolsFill className="main-btn-icon" />
                <h3>Revestimientos</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mainText">
        <h2>
          ¿QUÉ HACEMOS?
        </h2>
        <p>
          Somos una empresa, con una vasta experiencia y trayectoria en el mercado de la construcción, refacción y modernización de piletas.
          Contamos con más de 20 años de experiencia, un gran equipo de trabajo, para la realización de cada trabajo, maquinarias de primer nivel y sobre todo, pasión por lo que hacemos.
          Brindamos asesoramiento e ideas revolucionarias y modernas. Contamos con accesorios de ultima generación, tanto para la construcción como para la refacción y modernización de la pileta, y estamos muy atentos a las nuevas tendencias y novedades del mercado.

        </p>
      </div>
      <ControlledCarousel array={bannerImages} vof={false} />
    </div>
  );
};

export default Banner;
