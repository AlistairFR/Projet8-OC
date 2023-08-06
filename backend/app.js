const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

const mailRoutes = require("./routes/mail");
const projectsRoutes = require("./routes/projects");
const skillsRoutes = require("./routes/skills");

const app = express();

// Gère la connexion à la base de données
mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@portfoliowinckel.mqp39mt.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Permet les requêtes cross-origin depuis n'importe quel domaine
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use(mailRoutes);
app.use(projectsRoutes);
app.use(skillsRoutes);


module.exports = app;
