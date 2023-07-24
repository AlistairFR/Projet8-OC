import {useLocation} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import portrait from '../images/portrait.jpg';

import "../styles/Navbar.scss";

function Navbar() {
    const location = useLocation();
    return (
        <nav id='navbar'>
            <div className="navbar-portrait-container">
                <img className='navbar-image' alt='portrait' src={portrait}/>
                <p className='navbar-name'>WINCKEL Jean-Baptiste</p>
            </div>
            <div className="navbar-links">
                <Link className={
                    location.pathname === '/'
                        ? 'active NavBar-Links'
                        : 'NavBar-Links'
                    }
                    to="#navbar"
                >
                    ACCUEIL
                </Link>
                <Link className={
                    location.pathname === '/'
                        ? 'active NavBar-Links'
                        : 'NavBar-Links'
                    }
                    to="#about"
                >
                    A PROPOS
                </Link>
                <Link className={
                    location.pathname === '/'
                        ? 'active NavBar-Links'
                        : 'NavBar-Links'
                    }
                    to="#projects"
                >
                    PROJETS
                </Link>
            </div>
        </nav>
    )
}

export default Navbar