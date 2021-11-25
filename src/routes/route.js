const express = require('express');
const usercontroller=require('../usercontroller.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/registerUser',usercontroller.registerUser)

module.exports = router;