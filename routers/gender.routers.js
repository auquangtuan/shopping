const { getAllGender, createGender, editGender, deleteGender, getOneGender } = require('../controllers/Gender.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Gender} = require('../models')
const genderRouter = require('express-promise-router')()

genderRouter.route('/')
    .get(getAllGender)
    .post(authentication,authorrize([1]),createGender)
genderRouter.route('/:id')
    .get(getOneGender)
    .put(authentication,authorrize([1]),editGender)
    .delete(checkExits(Gender),authentication,authorrize([1]),deleteGender)
module.exports = {
    genderRouter
}