const { uploadArrGalery } = require('../controllers/galery.controllers')
const { uploadArrImg } = require('../middlewares/upload/uploadArrImg/uploadArrImg')
const galeryRouter = require('express-promise-router')()

galeryRouter.route('/')
    .post(uploadArrImg('galery'), uploadArrGalery)

module.exports = {
    galeryRouter
}