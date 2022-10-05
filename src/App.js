import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";
import Construccion from "./Components/Construccion";
import Luces from "./Components/Luces";
import Baby from "./Components/Baby";
import Solar from "./Components/Solar";
import NavbarBS from "./Components/NavbarBS";
import TooltipBS from "./Components/TooltipBs";
import Revestimientos from "./Components/Revestimientos";

function App() {
  return (
    <div className="App">
      <NavbarBS />
      <Route exact path="/">
        <Banner />
        <Banner2 />
      </Route>
      <Route path="/construccion">
        <Construccion />
      </Route>
      <Route path="/revestimientos">
        <Revestimientos />
      </Route>
      <Route path="/contacto">
        <p>Contacto</p>
      </Route>
      <TooltipBS />
      <Footer />
    </div>
  );
}

export default App;
