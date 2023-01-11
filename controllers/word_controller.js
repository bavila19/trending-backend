const { json } = require('express')
const express = require('express')
const router = express.Router()
// router.use(express.json())
const {Word} = require('../models')
//const db = require('../models')

//Index route
router.get('/', async (req,res)=>{ 
    try {
        const Wordboy = await Word.find({})
        return res.status(200).json(Wordboy)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//Show Route
router.get('/:id', async(req,res)=>{
    try{
        const findWord = await Word.findById(req.params.id)
        res.status(201).json(findWord)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

//Post Route
router.post('/', async(req, res)=>{
    try{
        const newWord = await Word.create(req.body)
        res.status(201).json(newWord)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

//Update Route
router.put('/:id', async (req, res) => {
    try{
        res.json(await Word.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch (error){
        res.json(error)
    }
})

// Delete Route
router.delete('/:id', async(req,res)=>{
    try{
        const deletedWord = await Word.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedWord)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = router