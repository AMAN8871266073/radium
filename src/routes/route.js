const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const authorModel= require("../models/authorModel")
const UserController= require("../controllers/userController")
const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const BookControllerTwo= require("../controllers/bookControllerTwo")
const AssignmentBookController= require("../controllers/assignmentBookController");
const bookModelTwo = require('../models/bookModelTwo');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/createAuthor',authorController.createAuthor)
router.post('/createBookTwo',BookControllerTwo.createBookTwo)
router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );
router.get('/bookByAuthor',  authorController.bookByAuthor  );
router.post('/createBook',  BookController.createBook  );
router.get('/getAllBooks',  BookController.getBooksData  );
router.get('/updateByAuthor',BookControllerTwo.updateByAuthor)
// mongo session 3: session/schema-basic3
router.get('/getFirstBook',  BookController.getBook  );
router.post('/updateBooks',  BookController.updateBooks  );

router.post('/deleteBook',  BookController.deleteBook  );
router.get('/findAuthor',BookControllerTwo.findAuthor)

// Previous Day asignment API's
router.post('/createBook',  AssignmentBookController.createBook  );
router.get('/bookList',  AssignmentBookController.allBooksList  );
router.post('/getParticularBooks',  AssignmentBookController.particularBooks  );
 router.post('/getBooksInYear',AssignmentBookController.yearDetails);
router.get('/getXINRBooks',  AssignmentBookController.priceDetails  );
router.get('/getRandomBooks', AssignmentBookController.randomBooks  );



module.exports = router;