import React from "react";
import './App.css';
import Btn_ini from '../Componentes/User_admin.jsx';
import { Link } from 'react-router-dom';


const Admin = () => {
  return (
    <div className="App">
      <h1>Bienvenido Administrador</h1>
      <div className="Contenedor">
      <Link to="/">
        <Btn_ini titulo="REGRESAR"/>
      </Link>
      </div>
    </div>
  )
}

export default Admin