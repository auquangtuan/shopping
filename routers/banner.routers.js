const { getAllBanner, createBanner , deleteBanner, getOneBanner } = require('../controllers/Banner.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { uploadSingleImg } = require('../middlewares/upload/uploadSingleImg/uploadSingleImg')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Banner} = require('../models')
const bannerRouter = require('express-promise-router')()

bannerRouter.route('/')
    .get(getAllBanner)
    .post(uploadSingleImg('banner'),authentication,authorrize([1]),createBanner)
bannerRouter.route('/:id')
    .get(getOneBanner)
    .delete(checkExits(Banner),authentication,authorrize([1]),deleteBanner)
module.exports = {
    bannerRouter
}
//authentication,authorrize(['ADMIN'])