const nodemailer = require ("nodemailer");

exports.main = async (req, res) => {
    let name = req.body.name;
    let surname = req.body.surname;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: email,
        to: 'passionsfrance@gmail.com',
        subject: subject + ' SENT BY: ' + name + ' ' + surname,
        text: message
    };

    transporter.await.sendMail(mailOptions, function(err, mail) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent: " + mail.res);
        }
        res.redirect("/");
    })
};


