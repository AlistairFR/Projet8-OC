const nodemailer = require ("nodemailer");
//const Contactform = require ("../../frontend/src/components/ContactForm");

//let form = Contactform.getElementById("contact-form");
//formData = new FormData(ContactForm);

//let name = form.name.value;
//let surname = req.body.surname;
//let email = req.body.email;
//let subject = req.body.subject;
//let message = req.body.message;
exports.main = async (req, res) => {
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

const mailOptions = {
    from: 'contact.passionsfrance@gmail.com',
    to: 'passionsfrance@gmail.com',
    subject: "sujet",             //         subject + ' SENT BY: ' + name + ' ' + surname,
    text: 'message'
};

transporter.sendMail(mailOptions, function(err, mail) {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent: " + mail.response);
    }
    res.redirect("/");
})
};
