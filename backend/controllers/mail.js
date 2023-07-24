const nodemailer = require ("nodemailer");

exports.sendEmail = (req, res) => {
    const { email, message, name, subject } = req.body;

    //Création d'un transporteur Nodemailer en utilisant un compte Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    //Options du mail
    const mailOptions = {
        from: 'contact.passionsfrance@gmail.com',
        to: 'passionsfrance@gmail.com',
        subject: `Mail du formulaire - ${subject}`,
        text: `Nom: ${name}\nEmail: ${email}\n\n${message}`
    };

    // Envoi de l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ message: "Error sending email" });
          } else {
            console.log("Email sent:", info.response);
            res.json({ message: "Email sent successfully" });
          }
    });
};

