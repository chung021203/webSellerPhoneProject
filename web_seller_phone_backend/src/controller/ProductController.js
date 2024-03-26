const ProductService = require('../services/ProductService');
const createProduct = async (req, res) => {
    try {
        const { name, url_picture, type, countInStock, price, rating, description } = req.body

        if (!name || !url_picture || !type || !countInStock || !price || !rating ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ProductService.createProduct(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: "oke"
        })
    }
}
module.exports = { createProduct };

