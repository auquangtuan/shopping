const express = require('express')
const { categoryRouter } = require('./category.routers')
const { galeryRouter } = require('./galery.routers')
const { orderRouter } = require('./order.routers')
const { orderDetailsRouter } = require('./orderDetails.routers')
const { productRouter } = require('./product.routers')
const { roleRouter } = require('./role.routers')
const { userRouter } = require('./users.routers')

const rootRouter = express.Router()

rootRouter.use('/role', roleRouter )
rootRouter.use('/users', userRouter )
rootRouter.use('/cate', categoryRouter )
rootRouter.use('/product', productRouter )
rootRouter.use('/galery', galeryRouter )
rootRouter.use('/order', orderRouter )
rootRouter.use('/orderDetails', orderDetailsRouter )

module.exports = {
    rootRouter
}