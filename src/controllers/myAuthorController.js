const myAuthorModel=require('../models/myAuthorModel.js')
const createAuthor= async function(req,res){
    let data=req.body
    let savedData=await myAuthorModel.create(data)
    res.send({msg:savedData})
}
module.exports.createAuthor=createAuthor