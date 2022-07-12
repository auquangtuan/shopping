const { getAllStatus, createStatus, editStatus , deleteStatus, getOneStatus } = require('../controllers/Status.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Status} = require('../models')
const statusRouter = require('express-promise-router')()

statusRouter.route('/')
    .get(getAllStatus)
    .post(checkExits(Status),authentication,authorrize([1]),createStatus)
statusRouter.route('/:id')
    .get(getOneStatus)
    .put(checkExits(Status),authentication,authorrize([1]),editStatus)
    .delete(checkExits(Status),authentication,authorrize([1]),deleteStatus)
module.exports = {
    statusRouter
}
//authentication,authorrize(['ADMIN'])