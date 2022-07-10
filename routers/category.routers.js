const { getAllCategory, createCategory, editCategory, deleteCategory, getOneCategory } = require('../controllers/category.controllers')

const categoryRouter = require('express-promise-router')()

categoryRouter.route('/')
    .get(getAllCategory)
    .post(createCategory)
categoryRouter.route('/:id')
    .get(getOneCategory)
    .put(editCategory)
    .delete(deleteCategory)
module.exports = {
    categoryRouter
}