import React from "react";
import "./index.css";
import avatar2 from "./avatar2.png"

function SobreMi() {
    return (
        <div className="container-sobremi" id="sobremi">

            <div className='container-linea-diez'>
                <div className='linea-diez'></div>
            </div>

            <div className="container-p">
                <p className="p-uno">Sobre Mi</p>
            </div>

            <div className="container-titulo">
                <h1 className="titulo">Bienvenidos a mi Mundo!</h1>
            </div>

            <div className="container-medio">
                <div className="container-conjunto-cuadros">
                    <div className="container-cuadros uno" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-uno">Educacion</h2>
                        <p className="p-cuadros">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="container-cuadros dos" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-dos">Lorem</h2>
                        <p className="p-cuadros">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="container-cuadros tres" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-tres">Musica</h2>
                        <p className="p-cuadros">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="container-cuadros cuatro" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-cuatro">Lorem</h2>
                        <p className="p-cuadros">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="container-avatar">
                    <img src={avatar2} className="imagen" ></img>
                </div>
            </div>
            
            <div className="container-texto-final">
                <h3 className="h-final">Creativo. Dedicado. Detallista.</h3>
                <p className="p-final">Quieres saber mas sobre mi? Visita mi <a className="a-instagram" href="https://www.instagram.com/marvit_music/" target="_blank"> Instagram</a></p>
            </div>

            <div className='container-linea-once'>
                <div className='linea-once'></div>
            </div>
        </div>
    )
}

export { SobreMi }