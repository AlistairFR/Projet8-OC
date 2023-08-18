const express = require("express");
const mongoose = require("mongoose");
const cors = require("./middleware/cors.middleware");

require('dotenv').config();

const mailRoutes = require("./routes/mail");
const projectsRoutes = require("./routes/projects");
const skillsRoutes = require("./routes/skills");

const app = express();

// Gère la connexion à la base de données
mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@portfoliowinckel.mqp39mt.mongodb.net/Content?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Permet les requêtes cross-origin depuis n'importe quel domaine
app.use(cors);
app.use(express.json());

app.use(mailRoutes, projectsRoutes, skillsRoutes);


module.exports = app;
