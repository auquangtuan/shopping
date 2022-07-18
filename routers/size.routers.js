const { getAllSize, createSize, editSize , deleteSize, getOneSize } = require('../controllers/size.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Size} = require('../models')
const sizeRouter = require('express-promise-router')()

sizeRouter.route('/')
    .get(getAllSize)
    .post(checkExits(Size),authentication,authorrize([1]),createSize)
sizeRouter.route('/:id')
    .get(getOneSize)
    .put(checkExits(Size),authentication,authorrize([1]),editSize)
    .delete(checkExits(Size),authentication,authorrize([1]),deleteSize)
module.exports = {
    sizeRouter
}
//authentication,authorrize(['ADMIN'])