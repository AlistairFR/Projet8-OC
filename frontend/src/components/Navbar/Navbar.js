import React, { useState, useEffect, useRef } from "react";
import {useLocation} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import {gsap} from "gsap";

import ContactForm from "../ContactForm/ContactForm";
import ModalButton from "../ModalButton/ModalButton";

import "./Navbar.scss";

function ForwardedLink(props, ref) {
	return <Link {...props} ref={ref} />;
}

const ForwardedLinkWithRef = React.forwardRef(ForwardedLink);

function Navbar() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const location = useLocation();

	// Ref for the navbar element
	const navbarRef = useRef(null);

	// Refs for the link elements
	const linkRefs = useRef([]);

	// Create the timeline
	const navbarTimeline = gsap.timeline({
	  paused: true,
	});

	useEffect(() => {
	  // Ensure the navbar element and link elements are available
	  if (navbarRef.current && linkRefs.current.length > 0) {
		navbarTimeline
		  .fromTo(
			linkRefs.current,
			{
			  x: -400,
			  opacity: 0,
			},
			{
			  x: 0,
			  opacity: 1,
			  stagger: -0.02,
			}
		  )
		  .fromTo(
			navbarRef.current,
			{
			  backgroundColor: "rgb(12, 17, 23, 0.0)",
			},
			{
			  backgroundColor: "rgb(12, 17, 23, 0.8)",
			  delay: -0.2,
			}
		  );
	  }
	}, [navbarTimeline]);

    return (
        <nav id='navbar' className="navbar" ref={navbarRef}>
            <div className="navbar-open">
                <i className="fa-solid fa-bars fa-2xl navbar-button" onClick={() => {
                    navbarTimeline.progress() === 0
					 ? navbarTimeline.play()
					 : navbarTimeline.reverse();
                }}/>
            </div>
            <div className="navbar-links">
                <ForwardedLinkWithRef className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#top"
					ref={(el) => (linkRefs.current[0] = el)}
                >
                    ACCUEIL
                </ForwardedLinkWithRef>
                <ForwardedLinkWithRef className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#about"
					ref={(el) => (linkRefs.current[1] = el)}
                >
                    A PROPOS
                </ForwardedLinkWithRef>
                <ForwardedLinkWithRef className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#projects"
					ref={(el) => (linkRefs.current[2] = el)}
                >
                    PROJETS
                </ForwardedLinkWithRef>
                <ModalButton setModalIsOpen={setModalIsOpen}
					ref={(el) => (linkRefs.current[3] = el)}
				/>
            </div>
            <ContactForm modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </nav>
    )
}

export default Navbar