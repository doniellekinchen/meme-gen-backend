const mongoose = require('mongoose')

const { DATABASE_URI } = process.env

mongoose.connect(DATABASE_URI)

mongoose.connection
.on('open', ()=>console.log('hey gurl!'))
.on('close', ()=>console.log('bye gurl!'))
.on('error', (error) =>console.log(error))