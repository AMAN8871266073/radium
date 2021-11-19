const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const myBookSchema=new mongoose.Schema({
    name:String,
    Author:{type:ObjectId,
    ref:'myAuthor'},
    price:String,
    rating:Number,
    publisher:{type:ObjectId,
    ref:'publisher'}
},{timestamps:true})
module.exports=mongoose.model('myBook',myBookSchema)