import React from "react";
import './App.css';
import Card from '../Componentes/User_admin.jsx';
import { Link } from 'react-router-dom';


const User = () => {
  return (
    <div className="App">
      <h1>Bienvenido Usuario</h1>
      <div className="Contenedor">
      <Link to="/">
        <Card titulo="REGRESAR"/>
      </Link>
      </div>
    </div>
  )
}

export default User