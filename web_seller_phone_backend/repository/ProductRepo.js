import db from '../db'
import mysql from 'mysql2'

class ProductRepo {
    constructor() {
        this.pool = mysql.createPool(dbConfig);
    }

    getAllProducts(callback) {
        this.pool.query('SELECT * FROM products', callback);
    }

    getProductById(id, callback) {
        this.pool.query('SELECT * FROM products WHERE id_product = ?', [id], callback);
    }

    createProduct(productData, callback) {
        this.pool.query('INSERT INTO products SET ?', productData, callback);
    }

    updateProduct(id, productData, callback) {
        this.pool.query('UPDATE products SET ? WHERE id_product = ?', [productData, id], callback);
    }

    deleteProduct(id, callback) {
        this.pool.query('DELETE FROM products WHERE id_product = ?', [id], callback);
    }
}

export default ProductRepo;