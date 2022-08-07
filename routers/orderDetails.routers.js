const  {postOrder,createOrderDetails,deleteOrderDetails,editOrderDetails,getAllOrderDetails,getOneOrderDetails, getOrderDetailsChart} = require('../controllers/orderDetails.controllers')
const orderDetailsRouter = require('express-promise-router')()

orderDetailsRouter.route('/')
    .get(getAllOrderDetails)
    .post(createOrderDetails)
orderDetailsRouter.route('/chart')
    .get(getOrderDetailsChart)
orderDetailsRouter.route('/:id')
    .get(getOneOrderDetails)
    .put(editOrderDetails)
    .delete(deleteOrderDetails)
orderDetailsRouter.route('/postOrder')
    .post(postOrder)
module.exports = {
    orderDetailsRouter
}