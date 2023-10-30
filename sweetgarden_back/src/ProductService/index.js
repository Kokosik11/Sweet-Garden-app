const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/create', controller.create);
router.get('/category/:category', controller.getAllByCategory);
router.get('/', controller.getAll);

module.exports = {
    router
}