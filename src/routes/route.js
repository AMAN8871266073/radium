const express = require('express');
const controller=require('../controller')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/weather', controller.temp)

module.exports = router;
