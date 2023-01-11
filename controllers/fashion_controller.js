const { json } = require("express");
const express = require("express");
const router = express.Router();
router.use(express.json());
const { Fashion } = require('../models/Fashion');


// //Index route
router.get("/", async (req, res) => {
    try {
      const fashionista = await Fashion.find({});
      return res.status(200).json(fashionista);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });


//Post Route
// router.post("/", async (req, res) => {
//     try {
//       const newFashion = await Fashion.create(req.body);
//       res.status(201).json(newFashion);
//     } catch (err) {
//       res.status(400).json({ error: err.message });
//     }
//   });
router.post('/', async (req, res)=>{
    try{
        const newFashion = await Fashion.create(req.body);
        res.status(201).json(newFashion)

    }catch(err){
        res.status(400).json({error: err.message})
    }
});
//   router.post('/', async (req, res) => {
//       try{
//         // res.status(201).json({message: "people create/post route "})
//         res.json (await Fashion.create (req.body))
//     }catch{
//         res.status(400).json({error: err.message})
//     }
// })

module.exports = router;