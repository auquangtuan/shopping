const {getAllProduct,getOneProduct,createProduct,deleteProduct,editProduct} = require('../controllers/product.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const productRouter = require('express-promise-router')()
const {Product} = require('../models')
productRouter.route('/')
    .get(getAllProduct)
    .post(authentication,authorrize(['ADMIN']),createProduct)
productRouter.route('/:id')
    .get(getOneProduct)
    .put(authentication,authorrize(['ADMIN']),editProduct)
    .delete(checkExits(Product),authentication,authorrize(['ADMIN']),deleteProduct)
module.exports = {
    productRouter
}