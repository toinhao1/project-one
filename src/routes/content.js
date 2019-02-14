const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.get('/content/main', contentController.showNews);

module.exports = router;
