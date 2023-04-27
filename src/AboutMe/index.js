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
                        <p className="p-cuadros">Estudiante de la escuela de <span className="span-about-me">Desarrollo Web</span>, me he especializado en el desarrollo de Front-end con React.js; En la plataforma web <span className="span-about-me">"Platzi"</span>.</p>
                    </div>

                    <div className="container-cuadros dos" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-dos">Skills</h2>
                        <p className="p-cuadros">Tengo conocimientos y experiencias sobre: <span className="span-about-me">HTML, CSS3, JavaScript, React.js, Sass, Tailwind, Boostrap, Jest y Git</span></p>
                    </div>

                    <div className="container-cuadros tres" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-tres">Musica</h2>
                        <p className="p-cuadros">Soy un gran amante de la musica y los instrumentos, escucho muchos generos de música aunque mi favorito es la Electronica. En mi tiempo libre, me dedico a ser <span className="span-about-me">DJ y productor</span> de música electrónica.</p>
                    </div>

                    <div className="container-cuadros cuatro" data-aos="zoom-in" data-aos-offset="200">
                        <h2 className="titulo-cuadro-cuatro">Yo</h2>
                        <p className="p-cuadros">Me considero una persona muy <span className="span-about-me">Constante, Perseverante, Divertida y Feliz.</span> Con mucha paciencia para resolver los problemas que puedan surgir.</p>
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