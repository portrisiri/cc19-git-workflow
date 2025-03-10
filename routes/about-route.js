const express = require('express')
const aboutRouter = express.Router()

aboutRouter.get('/',(req,res)=>res.json({message:'hello'}))

module.exports=aboutRouter