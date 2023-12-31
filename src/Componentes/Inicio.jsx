import React from "react"
import './Inicio.css';
import ariesImage from './Images/aries.png';
import tauroImage from './Images/tauro.png';
import sagitarioImage from './Images/sagitario.png';
import virgoImage from './Images/virgo.png';
import cancerImage from './Images/cancer.png';
import libraImage from './Images/libra.png';

const Inicio = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a nuestra web oficial</h1>
            <p>Aqui podras consultar el horoscopo del dia</p>
            <main className="main-content">
                <section className="horoscope">
                    <h2>Horóscopo de Aries</h2>
                    <img src={ariesImage} alt="Aries Horoscope" />
                    <p>Tu horóscopo para hoy es...</p>
                    <p><b>Inicia sesion para consultarlo</b></p>
                </section>
                <section className="horoscope">
                    <h2>Horóscopo de Tauro</h2>
                    <img src={tauroImage} alt="Tauro Horoscope" />
                    <p>Tu horóscopo para hoy es...</p>
                    <p><b>Inicia sesion para consultarlo</b></p>
                </section>
                <section className="horoscope">
                    <h2>Horóscopo de Sagitario</h2>
                    <img src={sagitarioImage} alt="Sagitario Horoscope" />
                    <p>Tu horóscopo para hoy es...</p>
                    <p><b>Inicia sesion para consultarlo</b></p>
                </section>
                <section className="horoscope">
                    <h2>Horóscopo de Virgo</h2>
                    <img src={virgoImage} alt="Virgo Horoscope" />
                    <p>Tu horóscopo para hoy es...</p>
                    <p><b>Inicia sesion para consultarlo</b></p>
                </section>
                <section className="horoscope">
                    <h2>Horóscopo de Cancer</h2>
                    <img src={cancerImage} alt="Cancer Horoscope" />
                    <p>Tu horóscopo para hoy es...</p>
                    <p><b>Inicia sesion para consultarlo</b></p>
                </section>
                <section className="horoscope">
                    <h2>Horóscopo de Libra</h2>
                    <img src={libraImage} alt="Libra Horoscope" />
                    <p>Tu horóscopo para hoy es...</p>
                    <p><b>Inicia sesion para consultarlo</b></p>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Horóscopos</p>
            </footer>
        </div>
    )
  }
  
export default Inicio