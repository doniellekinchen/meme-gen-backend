const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MemeSchema = new Schema ({
    name: String,
    image: String,
    text: String
})


module.exports = mongoose.model("Meme", MemeSchema)







