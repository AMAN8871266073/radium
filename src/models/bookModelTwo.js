const mongoose=require('mongoose')
const bookTwoSchema=new mongoose.Schema({   
    bookName:String,
    author_id:{type:Number,required:true},
    price:Number,
    rating:Number
})
module.exports = mongoose.model( 'bookModel',bookTwoSchema )