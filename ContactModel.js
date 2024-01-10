const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    name: {type : String},
    ingredients : {type : Array},
    instructions:{type: Array}
})

const Contact = mongoose.model("contact", ContactSchema)
module.exports = Contact