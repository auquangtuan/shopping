const { getAllCategory, createCategory, editCategory, deleteCategory, getOneCategory } = require('../controllers/category.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')

const categoryRouter = require('express-promise-router')()
const {Category} = require('../models')
categoryRouter.route('/')
    .get(getAllCategory)
    .post(authentication,authorrize([1]),createCategory)
categoryRouter.route('/:id')
    .get(getOneCategory)
    .put(authentication,authorrize([1]),editCategory)
    .delete(checkExits(Category),authentication,authorrize([1]),deleteCategory)
module.exports = {
    categoryRouter
}