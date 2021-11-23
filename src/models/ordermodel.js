const mongoose = require("mongoose")
const orderSchema=new  mongoose.Schema({
userId: String,
productId: String,
amount: Number,
isFreeAppUser: true, 
date:Date

},{timestamps:true})
module.exports=mongoose.model('order',orderSchema)