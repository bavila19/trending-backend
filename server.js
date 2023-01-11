///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();
require('./config/db.connection')
// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");

// create application object
const app = express();
	

// app dependencies 
const cors = require('cors')
const morgan = require ('morgan')


//WHEN WE ARE READY CONTROLLER IMPORTS GO HERE!!!!

//express / app middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// //Cors helper function 
app.use(cors())

// //Morgan 
app.use(morgan('dev'))
///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// basic error handling for bad product indexes
app.get('/error', (req,res)=>{
    res.status(500).send('something went wrong...')
})

// error handling using the next argument + middleware
// next(Error('message'))
app.use((error, req,res,next)=>{
    console.error("inside middleware")
    if(error){
        return res.status(404).send(error.message)
    }
    next()
})

// wild card / 404 if not using error handling middleware 
app.get('*', (req,res,next)=>{
    if(req.error){
        res.status(404).send(`Error: ${req.error.message}`)
    }else {
        res.redirect('/error/')
    }
})

app.listen(process.env.PORT || 4000, () => console.log(`listening on PORT ${PORT}`));

