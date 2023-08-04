const Project = require("../models/Project");

exports.getProjects = (req, res, next) => {
    Project.find()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(400).json({ error }));
}