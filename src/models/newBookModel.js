const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const newBookSchema=new mongoose.Schema({
    name: String,  
    Author:{type:ObjectId,
    ref:'newAuthor'} ,
    price:Number,
    rating:Number
}, {timestamps: true} )

module.exports = mongoose.model( 'newBook',newBookSchema )
