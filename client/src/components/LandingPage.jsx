import React from "react";
import { NavLink } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage(){
    return(
    <div className="container">
    <header className="hero">
        <div className="textos-hero">
            <h1>Bienvenidos</h1>
        </div>
    </header>

    <section className="wave-contenedor website">
       
        <div className="contenedor-textos-main">
            <h2>Henry Countries</h2>
            <NavLink to='/home'><a className="buttonPrincipal">Empecemos!</a></NavLink> 

        </div>
    </section>  
    <footer className="contenedor">
        
            <h5>Hecho con ♥ por Lucia Englender</h5>
       
    </footer>  
    </div>
    )
}