import {React, useRef, useState} from "react";
import "./index.css";
import circumstancer from './Circumstancer.png';
import color from './ColorSale.png';
import catsFamily from './CatsFamily.png'

function Proyectos() {

    const [imgUnoActive, setImgUnoActive] = useState(false);
    const [imgDosActive, setImgDosActive] = useState(false);
    const [imgTresActive, setImgTresActive] = useState(false);

    function setUno() {
        return setImgUnoActive(!imgUnoActive);
    }

    function setDos() {
        return setImgDosActive(!imgDosActive);
    }

    function setTres() {
        return setImgTresActive(!imgTresActive);
    }


    return (
        <div className="container-proyectos" id="proyectos">
            <div className="container-lineas-proyectos">
                <div className='container-linea-siete'>
                    <div className='linea-siete'></div>
                </div>

                <div className='container-linea-ocho'>
                    <div className='linea-ocho'></div>
                </div>
            </div>

            <div className="container-myproyects">
                <p className="p-myproyects">Mis Proyectos</p>
            </div>

            <div className="container-titulo">
                <h1 className="h1-proyectos">Una muestra de mis mejores proyectos.</h1>
                <p className="p-titulo">(Incluyendo este proyecto)</p>
            </div>
            
            <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-projects" data-bs-ride="carousel">
                <div class="carousel-inner container-images">
                    <div class="carousel-item active" onMouseEnter={() => setTres()} onMouseLeave={() => setTres()}>
                        <img src={catsFamily} className={imgTresActive ? "img-swiper img-active d-block w-100" : "img-swiper d-block w-100"}></img>

                        <button className={imgTresActive ? "button-uno-daddy button-active" : "button-uno-daddy"}>
                            <a href="https://github.com/tenkitoeth/CatsFamily" target="_blank">Ver Codigo</a>
                        </button>

                        <button className={imgTresActive ? "button-dos-cats button-active" : "button-dos-cats"}>
                            <a href="https://thecatsfamily.com/" target="_blank">Visitar Pagina Web</a>
                        </button>
                    </div>

                    <div class="carousel-item" onMouseEnter={() => setUno()} onMouseLeave={() => setUno()}>
                        <img src={circumstancer} className={imgUnoActive ? "img-swiper img-active d-block w-100" : "img-swiper d-block w-100"} alt="..."></img>

                        <button className={imgUnoActive ? "button-uno-circumstancer button-active" : "button-uno-circumstancer"} >
                            <a>Ver Codigo</a>
                        </button>

                        <button className={imgUnoActive ? "button-dos-circumstancer button-active" : "button-dos-circumstancer"} >
                            <a href="https://circumstancer.com/" target="_blank">Visitar Pagina Web</a>
                        </button>
                    </div>

                    <div class="carousel-item" onMouseEnter={() => setDos()} onMouseLeave={() => setDos()}>
                        <img src={color} className={imgDosActive ? "img-swiper img-active d-block w-100" : "img-swiper d-block w-100"} alt="..."></img>

                        <button className={imgDosActive ? "button-uno-color button-active" : "button-uno-color"} >
                            <a>Ver Codigo</a>
                        </button>

                        <button className={imgDosActive ? "button-dos-color button-active" : "button-dos-color"} >
                            <a href="https://color.sale/" target="_blank">Visitar Pagina Web</a>
                        </button>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="carrousel-dos">
                <div class="container-cats">
                    <img src={catsFamily} className="imagen-cats"></img>

                    <div className="container-button-carrousel-dos">
                        <button className="button-uno-carrousel-dos">
                            <a href="https://github.com/tenkitoeth/CatsFamily" target="_blank">Ver Codigo</a>
                        </button>

                        <button className="button-dos-carrousel-dos">
                            <a href="https://thecatsfamily.com/" target="_blank">Visitar Pagina Web</a>
                        </button>
                    </div>

                </div>

                <div class="container-circumstancer" onMouseEnter={() => setUno()} onMouseLeave={() => setUno()}>
                    <img src={circumstancer} className="imagen-circumstancer" alt="..."></img>

                    <div className="container-button-carrousel-dos">
                        <button className="button-uno-carrousel-dos">
                            <a>Ver Codigo</a>
                        </button>

                        <button className="button-dos-carrousel-dos">
                            <a href="https://circumstancer.com/" target="_blank">Visitar Pagina Web</a>
                        </button>
                    </div>

                </div>

                <div class="container-color" onMouseEnter={() => setDos()} onMouseLeave={() => setDos()}>
                    <img src={color} className="imagen-color" alt="..."></img>

                    <div className="container-button-carrousel-dos">
                        <button className="button-uno-carrousel-dos">
                            <a>Ver Codigo</a>
                        </button>

                        <button className="button-dos-carrousel-dos">
                            <a href="https://color.sale/" target="_blank">Visitar Pagina Web</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-parrafo-final">
                <p className="p-final-proyectos">Quieres ver mas proyectos?</p>
                <p className="p-github-proyectos">Visitame en <a className="a-github-proyectos" href="https://github.com/VitaleMarvit" target="_blank"> Github</a>
                </p>
            </div>

            <div className='container-linea-nueve'>
                <div className='linea-nueve'></div>
            </div>

        </div>
    )
}

export { Proyectos }