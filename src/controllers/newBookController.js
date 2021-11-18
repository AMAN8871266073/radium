const newBookModel = require("../models/newBookModel.js");
const mongoose = require("mongoose");
const newAuthorModel = require("../models/newAuthorModel.js");
const createNewBook = async function (req, res) {
    const book = req.body;
    let authorId=req.body.Author
    let authorFromRequest=await newAuthorModel.findById(authorId)
    console.log(authorFromRequest)
    if(authorFromRequest)
    {
    let savedBook = await newBookModel.create(book);
    res.send({ msg: savedBook });
    }
    else {res.send("The authorId provided is not valid")}
  };
  const getNewBooks = async function (req, res) {
    let allBooks = await newBookModel.find().populate('Author');
    console.log(allBooks)
    res.send({ msg: allBooks });
  };
  
module.exports.createNewBook=createNewBook
module.exports.getNewBooks=getNewBooks