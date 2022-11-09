import React, { useEffect } from "react";
import "./styles.css";
import ControlledCarousel from "../Carousel";
import ReactGa from "react-ga";

const Revestimientos = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const revestimientoHome = [
    "/images/revestimientos4.jpeg",
    "/images/revestimientos2.jpeg",
    "/images/revestimientos3.jpeg",
    "/images/revestimientos1.jpeg",
  ];
  const revVenecitas = [
    "/images/venecitas4.jpg",
    "/images/venecitas3.jpg",
    "/images/venecitas2.jpg",
    "/images/venecitas1.jpg",
  ];
  const revAquavation = [
    "/images/aquavation1.jpeg",
    "/images/aquavation2.jpeg",
    "/images/aquavation4.jpg",
  ];
  const piedrasNaturales = [
    "/images/piedrasNat1.jpg",
    "/images/piedrasNat2.jpg",
    "/images/piedrasNat3.jpg",
    "/images/piedrasNat4.jpg",
  ];

  return (
    <div>
      <div>
        <ControlledCarousel
          array={revestimientoHome}
          vof={true}
          titulo="REVESTIMIENTOS"
        />
      </div>

      <div className="mainText">
        <h2>AQUAVATION</h2>
        <p>
          Este revestimiento revolucionario, para el interior de la pileta, se
          coloca in situ (no lleva junta), es elegante, resistente y suave,
          brinda una exelente terminacion, muy brillante y estatetica, en
          variados colores, para cada gusto. El producto esta compuesto por
          cemento Portland, cuarzo y marmol.
          <br />
          Beneficios en relacion a otros revestimientos:
          <br />
          <br />
          • No quedan juntas en las cuales se alojen algas.
          <br />
          • Tiene larga durabilidad (dada su composicion).
          <br />
          • Facil mantenimiento
          <br />
          • Facil de renovar y recuperar sus cualidades (con solo pulir, queda
          como nuevo)
          <br />
          <br />
          Existe una exclusiva gama de colores, los cuales en combinacion con
          pigmentos especiales, con piedras naturales, logran que el
          revestimiento permanezca inalterable en el tiempo. En COOL SUMMER
          contamos con personal altamente capacitado para la relizacion del
          trabajo y con herramientas y maquinarias, para lograr un exelente
          resultado.
        </p>
      </div>
      <ControlledCarousel
        array={revAquavation}
        vof={true}
        titulo="Aquavation"
        small={true}
      />
      <div className="mainText">
        <h2>VENECITAS</h2>

        <p>
          El tradicional sistema de revestimiento veneciano, con productos de
          alta calidad, tanto nacionales como importados en venecitas viceladas,
          permite revestir la superficie de la pileta con variados colores
          simples o convinados, que dan a su pileta una linda terminacion.
        </p>
      </div>
      <ControlledCarousel
        array={revVenecitas}
        vof={true}
        titulo="Venecitas"
        small={true}
      />
      <div className="mainText">
        <h2>PIEDRAS NATURALES</h2>
        <p>
          La colocacion de este tipo de materiales es mas delicado y artesanal,
          ya que las piedras se colocan de a una y no son todas iguales, con lo
          que hay que trabajar en la armonia del conjunto, cuidando los detalles
          y las terminaciones. La estetica que brinda este tipo de productos es
          mas natural y logra que el color de su espejo de agua sea cristalino y
          unico, con variados colores y logra un reflejo muy refrescante y
          natural del agua. En COOL SUMMER, tomamos el proceso de colocacion con
          la calma necesaria, para no apurar los procesos y seleccionando la
          mejor convinacion de piedras, para lograr la mejor terminacion de la
          superficie a recubrir y contamos con personal altamente calificado
          para la realizacion del trabajo.
        </p>
      </div>
      <ControlledCarousel
        array={piedrasNaturales}
        vof={true}
        titulo="Piedras Naturales"
        small={true}
      />
    </div>
  );
};

export default Revestimientos;
