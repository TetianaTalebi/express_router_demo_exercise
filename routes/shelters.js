const express = require('express');

const router = express.Router();

router.get('/shelters', (req, res) => {
    res.send('All shelters!');
})

router.post('/shelters', (req, res) => {
    res.send('Creating a shelter!');
})

router.get('/shelters/:id', (req, res) => {
    res.send('Viewing one shelter!');
})

router.put('/shelters/:id/edit', (req, res) => {
    res.send('Editing one shelter!');
})