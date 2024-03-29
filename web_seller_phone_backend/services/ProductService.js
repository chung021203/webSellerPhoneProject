import productRep from '../repository/ProductRepo.js'

class ProductService {
    constructor() {
        this.productRep = new ProductQuery();
    }

    getAllProducts(callback) {
        this.productRep.getAllProducts(callback);
    }

    getProductById(id, callback) {
        this.productRep.getProductById(id, callback);
    }

    createProduct(productData, callback) {
        this.productRep.createProduct(productData, callback);
    }

    updateProduct(id, productData, callback) {
        this.productRep.updateProduct(id, productData, callback);
    }

    deleteProduct(id, callback) {
        this.productRep.deleteProduct(id, callback);
    }
}

export default ProductService