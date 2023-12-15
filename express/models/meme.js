const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MemeSchema = new Schema ({
    caption1: { type: String, required: true },
    caption2: { type: String, required: true },
})


module.exports = mongoose.model("Meme", MemeSchema)







