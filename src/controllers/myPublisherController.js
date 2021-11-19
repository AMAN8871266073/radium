const myPublisherModel=require('../models/myPublisherModel.js')
const createPublisher=async function(req,res){
    let data=req.body
    let savedData=await myPublisherModel.create(data)
    res.send({msg:savedData})
   }
   module.exports.createPublisher=createPublisher