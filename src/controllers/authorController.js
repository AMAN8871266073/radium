const authorModel= require("../models/authorModel.js")
const bookModelTwo= require("../models/bookModelTwo.js")
const createAuthor= async function (req, res) {
    var data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})    
}
const bookByAuthor= async function (req, res) {
    var data= await authorModel.find({"authorName":"Chetan Bhagat"}).select({"author_id":1})
    let savedData= await bookModelTwo.find(data)
    res.send({msg: savedData})    
}

module.exports.createAuthor= createAuthor
module.exports.bookByAuthor= bookByAuthor