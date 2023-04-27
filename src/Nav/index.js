import {React, useState} from "react";
import "./index.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Nav() {

    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false)

    return (
        <nav className={hamburguer ? "container-nav nav-active" : "container-nav"}>
            <div className="div-nav">
                <a className="nombre-a" href="#main">Mariano Vitale Tasso</a>

                <div 
                    id="hamburguer" 
                    className="three col" 
                    onClick={() => {setHamburguer(!hamburguer)}}
                >
                    <div 
                        className={hamEffect ? 'hamburger is-active' : 'hamburger'} 
                        onClick={() => setHamEffect(!hamEffect)}
                        id="hamburger-6"
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>  
                
                <ul className={hamburguer ? "ul-secciones show" : "ul-secciones"} >
                    <li className="li-secciones">
                        <a href="#services" className="a-nav">Servicios</a>
                    </li>

                    <li className="li-secciones">
                        <a href="#proyectos" className="a-nav">Proyectos</a>
                    </li>

                    <li className="li-secciones">
                        <a href="#sobremi" className="a-nav">Sobre Mi</a>
                    </li>

                    <li className="li-secciones ultimo-li">
                        <a href="#contacto" className="a-nav">Contacto</a>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export { Nav }