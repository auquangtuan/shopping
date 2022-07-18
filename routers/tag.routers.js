const { getAllTag, createTag, editTag , deleteTag, getOneTag } = require('../controllers/tag.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Tag} = require('../models')
const tagRouter = require('express-promise-router')()

tagRouter.route('/')
    .get(getAllTag)
    .post(checkExits(Tag),authentication,authorrize([1]),createTag)
tagRouter.route('/:id')
    .get(getOneTag)
    .put(checkExits(Tag),authentication,authorrize([1]),editTag)
    .delete(checkExits(Tag),authentication,authorrize([1]),deleteTag)
module.exports = {
    tagRouter
}
//authentication,authorrize(['ADMIN'])