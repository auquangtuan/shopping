const { getAllRole, createRole, editRole, deleteRole, getOneRole } = require('../controllers/role.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Role} = require('../models')
const roleRouter = require('express-promise-router')()

roleRouter.route('/')
    .get(getAllRole)
    .post(authentication,authorrize(['ADMIN']),createRole)
roleRouter.route('/:id')
    .get(getOneRole)
    .put(authentication,authorrize(['ADMIN']),editRole)
    .delete(checkExits(Role),authentication,authorrize(['ADMIN']),deleteRole)
module.exports = {
    roleRouter
}