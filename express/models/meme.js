const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MemeSchema = new Schema ({
    name: String,
    image: String,
    font: String,
    text: String,

})


// const mongoose = require(‘mongoose’);
// const memeSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   likes: {
//     type: Number,
//     default: 0,
//   },
//   created_at: {
//     type: Date,
//     default: Date.now,
//   },
// });
// const Meme = mongoose.model(‘Meme’, memeSchema);
// module.exports = Meme;










