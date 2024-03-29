import router from 'Router'
import ProductController from '../controller/ProductController.js'

const productController = new ProductController()

router.get('/get/product', (res, req) => productController.getAllProducts(req, res));
router.get('/get/product/:id', (res, req) => productController.getProductById(req, res));
router.post('/post/product', (res, req) => productController.createProduct(req, res));
router.put('/put/product/:id', (res, req) => productController.updateProduct(req, res));
router.delete('/delete/product/:id', (res, req) => productController.deleteProductById(req, res));


export default router;