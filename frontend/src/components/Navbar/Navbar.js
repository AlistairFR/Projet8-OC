import React, { useState, useLayoutEffect, useRef } from "react";
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

	const navbarRef = useRef(null);
	const linkRefs = useRef([]);

	const navbarTimeline = gsap.timeline({
	  paused: true,
	  reversed: true,
	});

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			navbarTimeline.fromTo(
				linkRefs.current,
				{
				x: -400,
				opacity: 0,
				cursor: "default",
				pointerEvents: "none"
				},
				{
				x: 0,
				opacity: 1,
				cursor: "pointer",
				pointerEvents: "auto",
				stagger: -0.02,
				duration: 0.4,
				}
			)
			.fromTo(
				navbarRef.current,
				{
				backgroundColor: "rgb(12, 17, 23, 0.0)",
				},
				{
				backgroundColor: "rgb(12, 17, 23, 0.8)",
				duration: 0.2,
				}
			);
		})

		return () => {
			ctx.revert();
		}
	}, [navbarTimeline]);

    return (
        <nav id='navbar' className="navbar" ref={navbarRef}>
            <div className="navbar-open">
                <i className="fa-solid fa-bars fa-2xl navbar-button" onClick={() => {
                    navbarTimeline.reversed()
					 ? navbarTimeline.play()
					 : navbarTimeline.reverse();
                }}/>
            </div>
            <div className="navbar-links">
                <ForwardedLinkWithRef className='navbar-link'
                    to="#top"
					ref={(el) => (linkRefs.current[0] = el)}
                >
                    ACCUEIL
                </ForwardedLinkWithRef>
                <ForwardedLinkWithRef className='navbar-link'
                    to="#about"
					ref={(el) => (linkRefs.current[1] = el)}
                >
                    A PROPOS
                </ForwardedLinkWithRef>
                <ForwardedLinkWithRef className='navbar-link'
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