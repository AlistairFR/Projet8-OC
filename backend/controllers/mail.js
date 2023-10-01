const nodemailer = require ("nodemailer");
const dotenv = require ("dotenv");

dotenv.config();

exports.sendEmail = (req, res) => {
    // Test
    console.log("Email request received!");

    const { email, message, name, subject } = req.body;
    // Test
    console.log("Form data:", name, email, subject, message);

    //Création d'un transporteur Nodemailer en utilisant un compte Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    });

    //Options du mail
    const mailOptions = {
        from: 'contact.passionsfrance@gmail.com',
        to: 'winckeldev@gmail.com',
        subject: `Formulaire - ${subject}`,
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

