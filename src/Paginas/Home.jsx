import React from "react";
import './App.css';
import Header from "../Componentes/Header";
import Inicio from "../Componentes/Inicio";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <Header titulo_principal="Bienvenido al Horoscopo"
      titulo={<Link to="/UserSelect">Iniciar sesion</Link>}/>
      <div className="Contenedor">
        <Inicio></Inicio>
      </div>
    </div>
  )
}

export default Home