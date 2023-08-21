import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import {gsap} from "gsap";

import ContactForm from "../ContactForm/ContactForm";
import ModalButton from "../ModalButton/ModalButton";

import "./Navbar.scss";

function Navbar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const location = useLocation();

    function NavbarAnimate() {
        gsap.fromTo(".navbar-link", {
            x:-400,
            opacity:0
        },{
            x:0,
            opacity:1,
            backgroundColor:"rgb(12, 17, 23, 0.8)",
            stagger:-0.02
        })
    }

    return (
        <nav id='navbar' className={
            navbarIsOpen
                ? "navbar open"
                : "navbar"
                }>
            <div className="navbar-open">
                <i className={
                    navbarIsOpen
                        ? "fa-solid fa-bars fa-2xl navbar-button open"
                        : "fa-solid fa-bars fa-2xl navbar-button"
                } onClick={() => {
                    setNavbarIsOpen(!navbarIsOpen);
                    NavbarAnimate();
                }}></i>
            </div>
            <div className={
                navbarIsOpen
                    ? "navbar-links open"
                    : "navbar-links"
                    }
                >
                <Link className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#top"
                >
                    ACCUEIL
                </Link>
                <Link className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#about"
                >
                    A PROPOS
                </Link>
                <Link className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#projects"
                >
                    PROJETS
                </Link>
                <ModalButton setModalIsOpen={setModalIsOpen} />
            </div>
            <ContactForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </nav>
    )
}

export default Navbar