const authorModel = require("../models/authorModel.js")
const bookModelTwo= require("../models/bookModelTwo.js")

const createBookTwo= async function (req, res) {
    var data= req.body
    let savedData= await bookModelTwo.create(data)
    res.send({msg: savedData})    
}
const updateByAuthor= async function (req, res) {
    let savedData= await bookModelTwo.findOneAndUpdate({bookName:"Two states"},{price:1000})
    res.send({msg: savedData})    
}
const findAuthor= async function (req, res) {
    let savedData= await bookModelTwo.find({price:{$gte:1000,$lte:1100}}).select({author_id:1,_id:0})
    let  newData=   await authorModel.find(...savedData).select({authorName:1,_id:0})
console.log(newData)
    res.send({msg: newData})    
}


module.exports.createBookTwo= createBookTwo
module.exports.updateByAuthor= updateByAuthor
module.exports.findAuthor= findAuthor