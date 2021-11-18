const newAuthorModel = require("../models/newAuthorModel.js");
const mongoose = require("mongoose");
const createNewAuthor = async function (req, res) {
    const author = req.body;
    let savedAuthor = await newAuthorModel.create(author);
    res.send({ msg: savedAuthor});
  };
module.exports.createNewAuthor=createNewAuthor
