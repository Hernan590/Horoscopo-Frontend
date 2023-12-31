import React from "react"
import './User_admin.css';
import { Link } from 'react-router-dom';
import Btn_ini from "./Btn_ini";
import user from './Images/usuario.png';
import admin from './Images/administrador.png'


function User_admin() {

  return (
    <div className="selector-container">
      <h1>Selecciona el modo de usuario:</h1>
      <main className="main-content">
        <section>
          <img src={user} style={{ marginTop: '15px', width: "55px", height: "55px" }} alt="usuario" />
          <Link to="User">
            <Btn_ini titulo="Usuario" />
          </Link>
        </section>
        <section>
          <img src={admin} style={{ marginTop: '15px', width: "55px", height: "55px" }} alt="administrador" />
          <Link to="Admin">
            <Btn_ini titulo="Administrador" />
          </Link>
        </section>
        <Link to="/">
          <Btn_ini titulo="Regresar" />
        </Link>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Horóscopos</p>
      </footer>
    </div>
  );
}

export default User_admin;

 {/* <Link to ="User">
        <Card titulo="USUARIO"/>
      </Link>
      <Link to="Admin">
        <Card titulo="ADMINISTRADOR"/>
      </Link> */}