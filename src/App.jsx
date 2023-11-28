import { React, useState } from "react";
//import "./App.css";
//components
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CountComponent from "./components/CountComponent/CountComponent.jsx";
//Estilos
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      <ItemListContainer greeting="hola" />

      <CountComponent />
    </div>
  );
};

export default App;
