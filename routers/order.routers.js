const {createOrder,getAllOrder,getOneOrder,editOrder,deleteOrder} = require('../controllers/order.controlleres')
const orderRouter = require('express-promise-router')()

orderRouter.route('/')
    .post(createOrder)
    .get(getAllOrder)
orderRouter.route('/:id')
    .get(getOneOrder)
    .put(editOrder)
    .delete(deleteOrder)
module.exports = {
    orderRouter
}