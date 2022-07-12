const {getAllProductSize,getOneProductSize,createProductSize,deleteProductSize,editProductSize} = require('../controllers/productSize.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const productSizeRouter = require('express-promise-router')()
const {ProductSize} = require('../models')
productSizeRouter.route('/')
    .get(getAllProductSize)
    .post(authentication,authorrize([1]),createProductSize)
productSizeRouter.route('/:id')
    .get(getOneProductSize)
    .put(authentication,authorrize([1]),editProductSize)
    .delete(checkExits(ProductSize),authentication,authorrize([1]),deleteProductSize)
module.exports = {
    productSizeRouter
}