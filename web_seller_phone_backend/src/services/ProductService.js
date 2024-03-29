const Product = require('../model/ProductModel');

const createProduct = async (newProduct) => {
    try {
        const { name, url_picture, type, Stock_quantity, price, rating, description} = newProduct;

 
        const existingProduct = await Product.findOne({ where: { name } });
        if (existingProduct) {
            return {
                status: 'error',
                message: 'Product with the same name already exists'
            };
        }

        const createdProduct = await Product.create({
            name,
            url_picture,
            type,
            Stock_quantity: parseInt(Stock_quantity),
            price: parseFloat(price),
            description,
        
        });

        return {
            status: 'success',
            message: 'Product created successfully',
            data: createdProduct
        };
    } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Failed to create product');
    }
};

module.exports = {
    createProduct
};
