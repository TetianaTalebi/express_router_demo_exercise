const express = require('express');
const router = express.Router();

router.get('/topsecret', (req, res) => {
    res.send('This is a top secret!!!');
})

router.get('/deleteeverything', (req, res) => {
    res.send('Delete it all !!!!');
})

module.exports = router;