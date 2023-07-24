import React, { useState } from "react";

function ContactForm() {
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
        fetch("/send-email", {
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
        <form className="footer-form" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-names">
                    <div>
                        <label>Nom Complet</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nom"
                            value={formData.name}
                            onChange={handleChange}
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
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
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
                            placeholder="Sujet"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Votre message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" name="form-submit" id="form-submit">Envoyer mon message</button>
            </form>
    )
}

export default ContactForm