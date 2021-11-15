const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const bookModel=require("../models/bookModel.js")
const UserController= require("../controllers/userController")
const bookController=require("../controllers/bookController.js")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );
router.post('/createBook', bookController.createBook);
router.get('/getAllBooks', bookController.getBookData)



module.exports = router;