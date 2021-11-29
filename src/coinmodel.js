const mongoose=require('mongoose')
const coinSchema=new mongoose.Schema({
    "symbol" :{type:String,Unqiue:true},
     "name": {type:String,Unqiue:true},
    "marketCapUsd":String, 
    "priceUsd": String
},{timestamps:true}
)
module.exports=mongoose.model('cryptocoins',coinSchema)