const ProductRouter = require('./ProductRoutes')
const routes = (app) => {
    app.use('/api/product', ProductRouter)}

    module.exports = routes