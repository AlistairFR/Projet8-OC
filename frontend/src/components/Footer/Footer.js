import "./Footer.scss"
import ContactForm from "../ContactForm/ContactForm"

function Footer() {
    return (
        <footer>
            <div>
                <h3>Me contacter</h3>
                <div className="footer-text">
                    N'hésitez pas à me contacter via ce formulaire !
                </div>
            </div>
            <ContactForm />
        </footer>
    )
}

export default Footer