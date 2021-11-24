const mongoose=require('mongoose')
const usermodel=require('../models/usermodel.js')
let createUser=async function(req,res){
    let data=req.body
    console.log(data)
    let savedData=await usermodel.create(data)
    console.log(savedData)
    res.send(savedData)
}
module.exports.createUser=createUser