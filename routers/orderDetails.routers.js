const  {postOrder,createOrderDetails,deleteOrderDetails,editOrderDetails,getAllOrderDetails,getOneOrderDetails} = require('../controllers/orderDetails.controllers')
const orderDetailsRouter = require('express-promise-router')()

orderDetailsRouter.route('/')
    .get(getAllOrderDetails)
    .post(createOrderDetails)
orderDetailsRouter.route('/:id')
    .get(getOneOrderDetails)
    .put(editOrderDetails)
    .delete(deleteOrderDetails)
orderDetailsRouter.route('/postOrder')
    .post(postOrder)
module.exports = {
    orderDetailsRouter
}