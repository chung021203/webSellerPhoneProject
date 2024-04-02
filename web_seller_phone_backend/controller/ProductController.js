// productController.js

import { update } from '../services/Product/UpdateProductService.js';
import { getAllProductService } from '../services/Product/GetAllProductService.js';
import { getProduct } from '../services/Product/GetProductByIDService.js';
import { deleteProduct } from '../services/Product/DeleteProductService.js';

const getAllProducts = async (req, res) => {
    // Your implementation for getting all products
    try {
        const response = await getAllProductService();
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const getProductById = async (req, res) => {
    // Your implementation for getting product by ID
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({
                status: 'error',
                message: 'The productId is required'
            });
        }
        const response = await getProduct(productId); 
        if (response.status === 'error') {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        return res.status(200).json({
            status: 'success',
            product: response.data 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }   
};

const createProduct = async (req, res) => {
    // Your implementation for creating a new product
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
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
        return res.status(400).json({
            status: 'ERR',
            message: 'The productId is required',
        });
    }
    try {
        const response = await deleteProduct(productId, data); // Gọi service để xóa sản phẩm
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
        });
    }
};

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProductById };
