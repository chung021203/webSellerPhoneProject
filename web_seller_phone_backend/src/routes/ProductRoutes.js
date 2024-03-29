const ProductController = require('../controller/ProductController');
const express = require("express");
const router = express.Router()
router.post('/create', ProductController.createProduct)
module.exports = router