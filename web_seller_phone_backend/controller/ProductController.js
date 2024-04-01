import { update } from '../services/Product/UpdateProductService.js';
import { create } from '../services/Product/CreateProductService.js';
const getAllProducts = async (req, res) => {
    // Your implementation for getting all products
};

const getProductById = async (req, res) => {
    // Your implementation for getting product by ID
};

const createProduct = async (req, res) => {
    const { nameProduct, price, stock_quantity, descrip_product, url_picture } = req.body;
        if (!nameProduct || !price || !stock_quantity || !descrip_product || !url_picture) {
            return res.status(400).json({ error: 'Invalid data' });
        }
        try {
            const productData = { nameProduct, price, stock_quantity, descrip_product, url_picture };
            const newProduct = await create(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};


const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
        return res.status(400).json({
            status: 'ERR',
            message: 'The productId is required',
        });
    }
    try {
        const response = await update(productId, data); // Corrected import here
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
        });
    }
};

const deleteProductById = async (req, res) => {
    // Your implementation for deleting a product by ID
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProductById };
