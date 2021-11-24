const mongoose=require('mongoose')
const ordermodel=require('../models/ordermodel.js')
const createOrder=async function(req,res){
    let data=req.body
    let savedData=await ordermodel.create(data)
    console.log(savedData)
    res.send(savedData)
}
module.exports.createOrder=createOrder