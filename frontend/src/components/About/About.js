import './About.scss'

function About() {
    return(
        <div className="about-container" id='about'>
            <div className="about-content">
                <h3>A propos de moi</h3>
                <p>
                    👋 &nbsp;Bonjour ! Je suis Jean-Baptiste, un <b>développeur web junior</b> à la recherche de mon premier rôle dans le développement.
                    <br/><br/>
                    💻 &nbsp;Avec une bonne maîtrise du HTML, CSS, et JavaScript, je suis <b>passionné</b> par la programmation, en particulier celle de jeux vidéos. Je me consacre à l'<b>apprentissage continu</b> des nouvelles technologies.
                    <br/><br/>
                    🌟 &nbsp;Je suis impatient de mettre ma <b>créativité</b> et mes <b>compétences</b> au service d'une équipe. Je m'épanouis dans l'apprentissage et je suis enthousiaste à l'idée de <b>participer</b> à des projets qui ont un impact.
                    <br/><br/>
                    🚀 &nbsp;Prêt à m'embarquer dans ce voyage, je cherche une chance d'<b>apprendre</b>, de <b>grandir</b> et de <b>créer</b> des expériences web significatives.
                    <br/><br/>
                    📧 Contactez-moi et discutons ensemble !
                </p>
            </div>
            <div className='about-contact'>
                <h3>Mes réseaux</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jean-baptiste-winckel-28b363206" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin" style={{color:"#3be0a9"}}/>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AlistairFR?tab=repositories" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github" style={{color:"#3be0a9"}}/>
                            GitHub
                        </a>
                    </li>
                    <li><i className="fa-solid fa-at" style={{color:"#3be0a9"}}/>contact@winckel-dev.fr</li>
                </ul>
                <button><i className="fa-solid fa-download" style={{color: "#3be0a0"}}/>Télécharger mon CV</button>
            </div>
        </div>
    )
}

export default About