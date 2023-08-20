import React, { useState } from "react";
import Modal from "react-modal";

import './ContactForm.scss'

function ContactForm({ modalIsOpen, setModalIsOpen }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call the API endpoint to send the form data to the server
        fetch("http://localhost:4000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response if needed
            console.log(data);
          })
          .catch((error) => {
            //Handle errors if any
            console.error("Error:", error);
        });
      };

    return (
        <Modal className="ReactModal__Content" overlayClassName="ReactModal__Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="contact-form-container">
                <h2><b>Contactez moi</b> via ce formulaire</h2>
                <form className="footer-form" id="contact-form" onSubmit={handleSubmit}>
                    <div className="form-names">
                        <div>
                            <label>Nom complet</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Sujet</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Message</label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Votre message ici"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" name="form-submit" id="form-submit">Envoyer</button>
                </form>
            </div>
        </Modal>
    )
}

Modal.setAppElement('#root')

export default ContactForm