import './About.scss'

function About() {
    return(
        <div className="about-container" id='about'>
            <div className="about-content">
                <h3>A propos de moi</h3>
                <p>
                    👋 Bonjour ! Je suis Jean-Baptiste, un développeur web junior à la recherche de mon premier rôle dans le développement.
                    <br/><br/>
                    💻 Avec une bonne maîtrise du HTML, CSS, et JavaScript, je suis passionné par la programmation, en particulier celle de jeux vidéos. Je me consacre à l'apprentissage continu des nouvelles technologies.
                    <br/><br/>
                    🌟 Je suis impatient de mettre ma créativité et mes compétences au service d'une équipe. Je m'épanouis dans l'apprentissage et je suis enthousiaste à l'idée de participer à des projets qui ont un impact.
                    <br/><br/>
                    🚀 Prêt à m'embarquer dans ce voyage, je cherche une chance d'apprendre, de grandir et de créer des expériences web significatives.
                    <br/><br/>
                    📧 Contactez-moi et discutons ensemble !
                </p>
            </div>
            <div className='about-contact'>
                <h3>Mes réseaux</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jean-baptiste-winckel-28b363206" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-linkedin" style={{color:"#3be0a9"}}/>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AlistairFR?tab=repositories" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-github" style={{color:"#3be0a9"}}/>
                            GitHub
                        </a>
                    </li>
                    <li><i class="fa-solid fa-at" style={{color:"#3be0a9"}}/>contact@winckel-dev.fr</li>
                </ul>
                <button><i className="fa-solid fa-download" style={{color: "#3be0a0"}}/>Télécharger mon CV</button>
            </div>
        </div>
    )
}

export default About