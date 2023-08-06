const Skill = require("../models/Skill");

exports.getSkills = (req, res, next) => {
    Skill.find()
        .then(skills => res.status(200).json(skills))
        .catch(error => res.status(400).json({ error }));
}