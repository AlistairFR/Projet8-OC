import {useLocation} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';

import "../styles/Navbar.scss";

function Navbar() {
    const location = useLocation();
    return (
        <nav id='navbar'>
            <div className="navbar-open">
                <i class="fa-solid fa-bars"></i>
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