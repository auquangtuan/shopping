const { uploadGalerys } = require('../middlewares/upload/uploadGalery/uploadGalerys')
const { uploadGalery, uploadMore } = require('../controllers/galery.controllers')
const galeryRouter = require('express-promise-router')()

galeryRouter.route('/single')
    .post(uploadGalerys('thumbnail') ,uploadGalery)
module.exports = {
    galeryRouter
}