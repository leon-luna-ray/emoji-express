const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(`<h1>Hello World!</h1>`)
})