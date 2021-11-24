const mongoose = require("mongoose")
const orderSchema=new  mongoose.Schema({
userId: String,
productId: String,
amount: Number,
isFreeAppUser:{type:Boolean,default:false}, 
date:Date

},{timestamps:true})
module.exports=mongoose.model('order',orderSchema)