import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className="container-contact" id="contacto">
            <div className='container-linea-doce'>
                <div className='linea-doce'></div>
            </div>

            <div className="container-info">
                <h1 className="h1-contact">Trabajemos Juntos!</h1>

                <button className="button-contact">
                    <a>Contactame</a>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="icono-contact"/>
                </button> 
            </div>
        </div>
    )
}

export { Contact }