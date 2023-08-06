const Project = require("../models/Project");

exports.getProjects = (req, res, next) => {
    Project.find()
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(400).json({ error }));
}