const express = require('express');
const middleware = require('../middleware');
const logincontroller = require('../logincontroller');
const usercontroller = require('../usercontroller.js')
const router = express.Router();
router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/registerUser', usercontroller.registerUser)
router.post('/login',middleware.check, logincontroller.login)
router.get('/user/:userId',middleware.tokencheck,middleware.usercheck,logincontroller.getuser)
router.put('/update/:userId',middleware.tokencheck,middleware.usercheck,logincontroller.update)
module.exports = router;