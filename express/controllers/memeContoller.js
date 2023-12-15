const db = require("../models")

module.exports ={
    index,
    create,
    show,
    update
}

async function index(req, res){
    try{
        res.status(200).json(await db.Meme.find({}))
    } catch (err) {
        res.status(400).json({ err: err.message})
    }
}

async function create(req, res){
    try{
        res.status(201).json(await db.Meme.create(req.body))
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

async function show(req, res) {
    try{
        res.status(200).json(await db.Meme.show())
    } catch (err){
        res.status(400).json({err: err.message})
    }
}

async function destroy(req, res) {
    try {
        res.status(200).json(await db.Meme.findByIdAndDelete(req.params.id))
    } catch (err){
        res.status(400).json({err: err.message})
    }
}

async function update(req, res) {
    try{
        res.status(200).json(await db.Meme.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
         )
     } catch(err){
            res.status(400).json({err: err.message})
        }
    }
