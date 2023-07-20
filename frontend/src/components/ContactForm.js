function ContactForm() {
    return (
        <form className="footer-form" id="contact-form" action="/sendmail" method="post">
                <div className="form-names">
                    <div>
                        <label>Nom</label>
                        <input type="text" name="name" id="name" placeholder="Nom"></input>
                    </div>
                    <div>
                        <label>Prénom</label>
                        <input type="text" name="surname" id="surname" placeholder="Prénom"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" id="email" placeholder="Email"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Sujet</label>
                        <input type="text" name="subject" id="subject" placeholder="Sujet"></input>
                    </div>
                </div>
                <div>
                    <div>
                        <label>Votre message</label>
                        <textarea name="message" id="message" placeholder="Votre message"></textarea>
                    </div>
                </div>
                <button type="submit" name="form-submit" id="form-submit">Envoyer mon message</button>
            </form>
    )
}

export default ContactForm