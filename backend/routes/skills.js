const express = require ("express");
const router = express.Router();
const skillsController = require("../controllers/skills");

router.get('/skills', skillsController.getSkills);

module.exports = router;