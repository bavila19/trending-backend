const { json } = require('express')
const express = require('express')
const router = express.Router()
// router.use(express.json())
const {Fashion} = require('../models')
//const db = require('../models')

//Index route
router.get('/', async (req,res)=>{ 
    try {
        const fashionista = await Fashion.find({})
        return res.status(200).json(fashionista)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//Show Route
router.get('/:id', async(req,res)=>{
    try{
        const findFashion = await Fashion.findById(req.params.id)
        res.status(201).json(findFashion)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

//Post Route
router.post('/', async(req, res)=>{
    try{
        const newFashion = await Fashion.create(req.body)
        res.status(201).json(newFashion)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

//Update Route
// router.put('/:id', async(req,res, next)=>{
//     try{
//         const updatedFashion = await Fashion.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         res.status(201).json(updatedFashion)
//     }catch(err){
//         res.status(400).json ({error: err.message})
//     }
// })

router.put('/:id', async (req, res) => {
    // console.log(req.body)
    // res.status(200).json({message: "people update route " + req.params.id})
    try{
        res.json(await Fashion.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch (error){
        res.json(error)
    }
})

// Delete Route
router.delete('/:id', async(req,res)=>{
    try{
        const deletedFashion = await Fashion.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedFashion)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = router