const mongoose=require('mongoose')
const productmodel=require('../models/productmodel.js')
const productcontroller= async function(req,res){
let productData = req.body
let savedData=await productmodel.create(productData)
console.log( savedData)
res.send({msg:savedData})
}
module.exports.productcontroller=productcontroller