const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    title : { type: String, required: true},
    imageUrl : { type: String, required: true}
});

module.exports = mongoose.model("Book", projectSchema);