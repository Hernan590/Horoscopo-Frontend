import React from "react";
import './App.css';
import User_admin from '../Componentes/User_admin.jsx';
import Header from "../Componentes/Header";

const Selector = () => {
  return (
    <div className="App">
      <Header titulo_principal="Seleccion de usuario"
        titulo="Sobre nosotros"
        titulo1="Atencion al cliente"
        titulo2="Blog" />
      <div className="Contenedor">
      <User_admin/>
      </div>
    </div>
  )
}

export default Selector



