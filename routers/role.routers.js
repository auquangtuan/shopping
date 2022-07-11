const { getAllRole, createRole, editRole, deleteRole, getOneRole } = require('../controllers/role.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Role} = require('../models')
const roleRouter = require('express-promise-router')()

roleRouter.route('/')
    .get(getAllRole)
    .post(createRole)
roleRouter.route('/:id')
    .get(getOneRole)
    .put(editRole)
    .delete(checkExits(Role),deleteRole)
module.exports = {
    roleRouter
}
//authentication,authorrize(['ADMIN'])