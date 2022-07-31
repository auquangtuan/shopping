const {createOrder,getAllOrder,getOneOrder,editOrder,deleteOrder, setStatusOrder} = require('../controllers/order.controlleres')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const orderRouter = require('express-promise-router')()

orderRouter.route('/')
    .post(createOrder)
    .get(getAllOrder)
orderRouter.route('/:id')
    .get(getOneOrder)
    .put(editOrder)
    .delete(authentication,authorrize([1]),deleteOrder)
orderRouter.route('/setStatus/:id')
    .put(setStatusOrder)
module.exports = {
    orderRouter
}