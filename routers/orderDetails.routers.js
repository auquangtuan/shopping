const  {setStatusOrder,createOrderDetails,deleteOrderDetails,editOrderDetails,getAllOrderDetails,getOneOrderDetails} = require('../controllers/orderDetails.controllers')
const orderDetailsRouter = require('express-promise-router')()

orderDetailsRouter.route('/')
    .post(createOrderDetails)
    .get(getAllOrderDetails)
orderDetailsRouter.route('/:id')
    .get(getOneOrderDetails)
    .put(editOrderDetails)
    .delete(deleteOrderDetails)
orderDetailsRouter.route('/setStatus/:id')
    .put(setStatusOrder)
module.exports = {
    orderDetailsRouter
}