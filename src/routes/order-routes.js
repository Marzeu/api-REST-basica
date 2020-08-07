const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

router.post('/', controller.get);
router.post('/', controller.post);

module.exports = router;