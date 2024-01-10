const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    name: {type : String},
    ingredients : {type : Array},
    instructions:{type: Array}
})

const Post = mongoose.model("posts", PostSchema)
module.exports = Post 