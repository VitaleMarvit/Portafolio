import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGit, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
    return (
        <div className="container-footer">
            <p className="p-left">©2023 Mariano Vitale Tasso</p>

            <p className="p-center">React Developer  -  Musician  -  DJ / Producer</p>

            <div className="container-rrss">
                <p className="p-rrss">
                    <a className="a-rrss github" href="https://github.com/VitaleMarvit">
                        Github
                    </a>
                </p> 

                <p className="p-rrss">
                    <a className="a-rrss email">
                        Email
                    </a>
                </p>

                <p className="p-rrss">
                    <a className="a-rrss linkedin" href="https://www.linkedin.com/in/mariano-vitale-tasso/">
                        Linkedin
                    </a>
                </p>

                <p className="p-rrss">
                    <a className="a-rrss instagram" href="https://www.instagram.com/marvit_music/">
                        Instagram
                    </a>
                </p>

                <p className="p-rrss-circulo">
                    <a className="a-rrss-circulo github-circulo" href="https://github.com/VitaleMarvit">
                        < FaGit className="icon-circulo"/>
                    </a>
                </p>

                <p className="p-rrss-circulo">
                    <a className="a-rrss-circulo email-circulo" href="">
                        < FaEnvelope className="icon-circulo"/>
                    </a>
                </p>

                <p className="p-rrss-circulo">
                    <a className="a-rrss-circulo linkedin-circulo" href="https://www.linkedin.com/in/mariano-vitale-tasso-2984311b8/">
                        < FaLinkedin className="icon-circulo"/>
                    </a>
                </p>

                <p className="p-rrss-circulo">
                    <a className="a-rrss-circulo instagram-circulo" href="https://www.instagram.com/marvit_music/">
                        < FaInstagram className="icon-circulo"/>
                    </a>
                </p>
            </div>
        </div>
    )
}

export { Footer }