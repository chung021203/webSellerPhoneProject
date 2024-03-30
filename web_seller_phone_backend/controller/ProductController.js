import ProductService from '../services/ProductService'

class ProductController {
    constructor() {
        this.productService = new ProductService;
    }

    getAllProducts(req, res) {

    }

    getProductById(req, res) {

    }

    async createProduct(req, res) {
        const { name, price, stock_quantity, description, pictureUrl } = req.body;
        try {
            const productId = await this.productService.createProduct(name, price, stock_quantity, description, pictureUrl);
            res.status(201).json({ success: true, productId });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    updateProduct(req, res) {

    }

    deleteProductById(req, res) {

    }
}

export default ProductController