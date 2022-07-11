const { getAllGender, createGender, editGender, deleteGender, getOneGender } = require('../controllers/Gender.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Gender} = require('../models')
const GenderRouter = require('express-promise-router')()

GenderRouter.route('/')
    .get(getAllGender)
    .post(authentication,authorrize(['ADMIN']),createGender)
GenderRouter.route('/:id')
    .get(getOneGender)
    .put(authentication,authorrize(['ADMIN']),editGender)
    .delete(checkExits(Gender),authentication,authorrize(['ADMIN']),deleteGender)
module.exports = {
    GenderRouter
}