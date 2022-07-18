const { getAllFeedback, createFeedback, deleteFeedback, getOneFeedback } = require('../controllers/feedback.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {Feedback} = require('../models')
const feedbackRouter = require('express-promise-router')()

feedbackRouter.route('/')
    .get(getAllFeedback)
    .post(authentication,authorrize([1]),createFeedback)
feedbackRouter.route('/:id')
    .get(getOneFeedback)
    .delete(checkExits(Feedback),authentication,authorrize([1]),deleteFeedback)
module.exports = {
    feedbackRouter
}
//authentication,authorrize(['ADMIN'])