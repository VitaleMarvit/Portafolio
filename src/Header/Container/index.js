import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import perfil from "./perfil.webp"

function ContainerHeader() {
    return (
        <div className="div-container" id="main">
            <div className="div-container-image">
                <img src={perfil} className="imagen-perfil"></img>
            </div>

            <div className="div-container-text">
                <h1 className="h1-container">React / Front-End Developer</h1>
                <p className="residencia">Redicidencia en Mendoza, Argentina.</p>
                <p className="trabajemos"><a href="https://www.linkedin.com/in/mariano-vitale-tasso-2984311b8/" target="_blank">Trabajemos Juntos!<FontAwesomeIcon className="icon" icon={faChevronRight} /></a></p>
            </div>
            
            <div className='container-linea-uno'>
                <div className='linea-uno'></div>
            </div>

            <div className="container-flotante-uno">
                <p className="p-emoji-flotante">👋🏻</p>
                
                <div className="container-texto">
                    <p className="p-flotante-uno">Hola! Soy</p>
                    <h3 className="nombre-flotante-uno">Mariano</h3>
                </div>
            </div>

            <div className="container-flotante-dos">
                <p className="p-flotante-dos">🧑🏻‍💻 Desarrollador Web</p>
            </div>

            <div className="container-flotante-tres">
                <p className="p-flotante-tres">Dj/Producer 🎵</p>
            </div>

        </div>
    )
}

export { ContainerHeader }