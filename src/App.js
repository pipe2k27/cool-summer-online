import React from "react";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";
import Construccion from "./Components/Construccion";
import NavbarBS from "./Components/NavbarBS";
import TooltipBS from "./Components/TooltipBs";
import Revestimientos from "./Components/Revestimientos";
import Contacto from "./Components/Contacto";
import Reformas from "./Components/Reformas";
import ReactGa from "react-ga";

ReactGa.initialize("UA-248517369-1");

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
      <Route path="/reformas">
        <Reformas />
      </Route>
      <Route path="/revestimientos">
        <Revestimientos />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
      <TooltipBS />
      <Footer />
    </div>
  );
}

export default App;
