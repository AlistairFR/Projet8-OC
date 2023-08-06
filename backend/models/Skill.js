const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    title : { type: String, required: true},
    percentage : { type: Number, required: true}
});

module.exports = mongoose.model("Skill", skillSchema);