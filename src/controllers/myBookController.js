const myBookModel=require('../models/myBookModel.js')
const myAuthorModel=require("../models/myAuthorModel.js")
const myPublisherModel=require('../models/myPublisherModel.js')
const mongoose=require("mongoose")
const createMyBook =async function(req,res){
    let data=req.body
    let AuthorId=req.body.Author
    let p_id=req.body.publisher
     let detail_Author=await myAuthorModel.findById(AuthorId)
    let detail_publisher=await myPublisherModel.findById(p_id)
     if(detail_Author)
    {
        if(detail_publisher)
        {
           let saved=await myBookModel.create(data)
           res.send({msg:saved})
        }
        else
        {
           res.send({msg:"wrong publisher id" })
        }
    }
    else{
        res.send({msg:"wrong authorId" })
    }
}
const getBook=async function(req,res){
    let data=await myBookModel.find().populate([{path:'Author',select:{author_name:1,age:1}},{path:'publisher',select:{name:1}}])
    res.send(data)
}
module.exports.createMyBook=createMyBook
module.exports.getBook=getBook
