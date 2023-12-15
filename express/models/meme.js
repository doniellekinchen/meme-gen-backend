const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MemeSchema = new Schema ({
    name: { type: String, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true },
})


module.exports = mongoose.model("Meme", MemeSchema)







