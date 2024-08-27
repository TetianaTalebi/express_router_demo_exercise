const express = require('express');

const router = express.Router();

router.get('/shelters', (req, res) => {
    res.send('All shelters!');
})

router.get('/shelters/:id', (req, res) => {
    res.send('Viewing one shelter!');
})