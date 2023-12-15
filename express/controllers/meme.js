const db = require("../models");

module.exports ={
    index,
    create,
    show,
    delete: destroy,
    update,
};

async function index(req, res, next){
    try{
        res.status(200).json(await db.Meme.find({}))
    } catch (err) {
        res.status(400).json({ err: err.message})
    }
}

async function create(req, res, next){
    try{
        res.status(201).json(await db.Meme.create(req.body))
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

async function show(req, res, next) {
    try{
        res.status(200).json(await db.Meme.findById(req.params.id))
    } catch (err){
        res.status(400).json({err: err.message})
    }
}

async function destroy(req, res, next) {
    try {
        res.status(200).json(await db.Meme.findByIdAndDelete(req.params.id))
    } catch (err){
        res.status(400).json({err: err.message})
    }
}

async function update(req, res, next) {
    try{
        res.status(200).json(await db.Meme.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
         )
     } catch(err){
            res.status(400).json({err: err.message})
        }
    }
