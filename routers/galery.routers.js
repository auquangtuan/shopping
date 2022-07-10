const { uploadGalerys } = require('../middlewares/upload/uploadGalery/uploadGalerys')
const { uploadGalery, uploadMore } = require('../controllers/galery.controllers')
const galeryRouter = require('express-promise-router')()

galeryRouter.route('/single')
    .post(uploadGalerys('thumbnail') ,uploadGalery)
galeryRouter.route('/more')
    .post(uploadGalerys('photos',12), uploadMore)
module.exports = {
    galeryRouter
}