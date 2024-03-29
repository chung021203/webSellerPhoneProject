import productRep from '../repository/ProductRepo.js'

class ProductService {
    constructor() {
        this.productQuery = new ProductQuery();
    }

    getAllProducts(callback) {
        this.productQuery.getAllProducts(callback);
    }

    getProductById(id, callback) {
        this.productQuery.getProductById(id, callback);
    }

    createProduct(productData, callback) {
        this.productQuery.createProduct(productData, callback);
    }

    updateProduct(id, productData, callback) {
        this.productQuery.updateProduct(id, productData, callback);
    }

    deleteProduct(id, callback) {
        this.productQuery.deleteProduct(id, callback);
    }
}

export default ProductService