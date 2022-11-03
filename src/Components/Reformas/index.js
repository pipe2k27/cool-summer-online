import React, { useEffect } from "react";
import "./styles.css";
import ControlledCarousel from "../Carousel";
import ReactGa from "react-ga";

const Reformas = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const construccionImages = [
    "/images/reformas1.jpeg",
    "/images/reformas2.jpeg",
    "/images/reformas3.jpg",
    "/images/reformas4.jpeg",
  ];

  return (
    <div>
      <div>
        <ControlledCarousel
          array={construccionImages}
          vof={true}
          titulo="REFORMAS"
        />
        {/* <div className="titleContain">
          <h1 className="mainTitle">
            CONSTRUCCIÓN
          </h1>
        </div> */}
      </div>

      <div className="mainText">
        <h2>REFORMAS</h2>
        <p>
          En COOL SUMMER te asesoramos, con grandes ideas y propuestas modernas,
          para que puedas transforar esa pileta desactualizada o descuidada que
          tenes en el jardin de tu casa, a fin de lograr cambiar la imagen
          integral de tu espacio verde, creando un lugar mas estetico y
          renovado, donde te de gusto estar y disfrutar y te llene de buena
          energia, animate al cambio, renovate. No te acostumbres a lo que no te
          gusta!!! “Pequenos cambios hacen grandes cambios”.
        </p>
      </div>
    </div>
  );
};

export default Reformas;
