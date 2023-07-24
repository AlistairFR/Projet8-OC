const express = require("express");
const cors = require("cors");

const mailRoutes = require("./routes/mail");

const app = express();

//Permet les requêtes cross-origin depuis n'importe quel domaine
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use(mailRoutes);

module.exports = app;
