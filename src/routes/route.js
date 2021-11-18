const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const newBookController= require("../controllers/newBookController")
const newAuthorController= require("../controllers/newAuthorController")

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
//assignment
router.post('/createNewbook',  newBookController.createNewBook  );
router.post('/createNewAuthor',  newAuthorController.createNewAuthor  );
router.get('/getNewBooks',  newBookController.getNewBooks  );

module.exports = router;