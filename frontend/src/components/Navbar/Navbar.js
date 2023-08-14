import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import { gsap } from "gsap";

import ContactForm from "../ContactForm/ContactForm";
import ModalButton from "../ModalButton/ModalButton";

import "./Navbar.scss";

function Navbar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    const location = useLocation();
    return (
        <nav id='navbar'>
            <div className="navbar-open">
                <i className={
                    navbarIsOpen
                        ? "fa-solid fa-bars fa-2xl navbar-button open"
                        : "fa-solid fa-bars fa-2xl navbar-button"
                } onClick={() => setNavbarIsOpen(!navbarIsOpen)}></i>
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