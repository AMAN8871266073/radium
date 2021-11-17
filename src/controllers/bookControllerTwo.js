const bookModelTwo= require("../models/bookModelTwo.js")

const createBookTwo= async function (req, res) {
    var data= req.body
    let savedData= await bookModelTwo.create(data)
    res.send({msg: savedData})    
}


module.exports.createBookTwo= createBookTwo