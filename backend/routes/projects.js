const express = require ("express");
const router = express.Router();
const projectsController = require("../controllers/projects");

router.get('/projects', projectsController.getProjects);

module.exports = router;