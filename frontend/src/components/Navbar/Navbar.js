import {useLocation} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import "./Navbar.scss";

function Navbar() {
    const location = useLocation();
    return (
        <nav id='navbar'>
            <div className="navbar-open">
                <i className="fa-solid fa-bars fa-2xl navbar-button"></i>
            </div>
            <div className="navbar-links">
                <Link className={
                    location.pathname === '/'
                        ? 'active navbar-link'
                        : 'navbar-link'
                    }
                    to="#navbar"
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
            </div>
        </nav>
    )
}

export default Navbar