const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({

    bookName:{type: String,required:true},

    authorName : String

    })

    module.exports=mongoose.model('book',bookSchema)