const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/topics/selection', topicController.topicsForm);
router.post('/topics/create', topicController.create);

module.exports = router;
