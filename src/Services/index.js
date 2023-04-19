import React from "react";
import './index.css';
import avatar1 from '../Assets/avatar1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGit, FaTextHeight } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaSass } from 'react-icons/fa'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FaBriefcase } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'


function Services() {
    return (
        <div className="container-general-servicios" id="services">
            <div className="container-general-lineas"> 
                <div className='container-linea-cuatro'>
                    <div className='linea-cuatro'></div>
                </div>

                <div className='container-linea-cinco'>
                    <div className='linea-cinco'></div>
                </div>
            </div>
            
            <div className="container-services">

                <div className="container-left">
                    <p className="p-container-left">Mis Habilidades y Experiencia</p>
                    <h2 className="h2-container-left">El compañero de trabajo mas creativo.</h2>
                    <div className="imagen-container">
                        < FaHeadphonesAlt className="icon-headphones" />

                        < FaJsSquare className="icon-js"/>

                        < FaReact className="icon-react"/>

                        <img src={avatar1} className="imagen-avatar"></img>

                        < FaGit className="icon-git"/>

                        <FontAwesomeIcon icon={faMusic} className="icon-music" />
                        
                        < FaSass className="icon-sass"/>
                    </div>
                </div>

                <div className="container-right" data-aos="fade-up">
                    <div className="container-container-right-habilidades">
                        <div className="container-titulo-habilidades habilidades-uno">
                            <FaCode className="icono-habilidades" />
                            <h3 className="h3-habilidades">Habilidades de Desarrollador</h3>
                        </div>
    
                        <p className="p-container-right">Gran conocimiento de HTML/CSS, Javascript, React.js y Git. Hago aplicaciones receptivas con Sass con diseños de interfaz de usuario interactivos.</p>
                    </div>

                    <div className="container-container-right-dj" data-aos="fade-up">
                        <div className="container-titulo-habilidades habilidades-dos">
                            <FontAwesomeIcon icon={faMusic} className="icono-dj"/>
                            <h3 className="h3-dj">Dj/Producer</h3>
                        </div>

                        <p className="p-container-right">Tengo una gran pasion por la musica en general, pero especificamente en la Electronica. Soy Dj y Productor Musical de este genero desde hace 4 años y como hobbie toco el piano.</p>
                    </div>

                    <div className="container-container-right-experiencia" data-aos="fade-up">
                        <div className="container-titulo-habilidades habilidades-tres">
                            <FaBriefcase className="icono-experiencia"/>
                            <h3 className="h3-experiencia">Experiencia</h3>
                        </div>

                        <p className="p-container-right">
                            Trabaje en: <br></br>
                            _ Circumstancer<br></br>
                            _ ColorSale<br></br>
                            <br></br>
                            Estoy ansioso por seguir sumando experiencia!
                        </p>
                    </div>
                </div>
            </div>

            <div className='container-linea-seis'>
                <div className='linea-seis'></div>
            </div>
        </div>
    )
}

export { Services }