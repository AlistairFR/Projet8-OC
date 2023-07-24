const express = require("express");

const mailRoutes = require("./routes/mail");

const app = express();

//Permet les requêtes cross-origin depuis n'importe quel domaine
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use(mailRoutes);

module.exports = app;
