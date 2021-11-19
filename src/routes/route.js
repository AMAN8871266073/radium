const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const myPublisherModel=require("../controllers/myPublisherController.js")
const myAuthorController=require("../controllers/myAuthorController.js")
const myBookController=require('../controllers/myBookController.js')
const myBookModel=require("../models/myBookModel.js")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/authors',  authorController.createAuthor  );
router.get('/authors',  authorController.getAuthors  );

// Books API
router.post('/books',  BookController.createBook  );
router.get('/books',  BookController.getBooks  );
router.get('/book',  BookController.getBook  );

router.post('/createNewPublisher',myPublisherModel.createPublisher)
router.post('/createNewAuthor',myAuthorController.createAuthor)
router.post('/createNewMyBook',myBookController.createMyBook)
router.get('/getAllMyBooks',myBookController.getBook)

module.exports = router;