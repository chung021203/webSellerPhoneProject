//ProductService.js

import Product from "../../model/ProductModel";

const getProduct = async (id, data) =>{
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return {
                status: 'error',
                message: 'Product not found',
            };
        }

        return {
            status: 'success',
            product: product,
        };
    } catch (error) {
        throw error;
    }
};

export { getProduct };