const express = require('express')
const { categoryRouter } = require('./category.routers')
const { galeryRouter } = require('./galery.routers')
const { orderRouter } = require('./order.routers')
const { orderDetailsRouter } = require('./orderDetails.routers')
const { productRouter } = require('./product.routers')
const { roleRouter } = require('./role.routers')
const { statusRouter } = require('./status.routers')
const { userRouter } = require('./users.routers')
const { bannerRouter } = require('./banner.routers')
const { feedbackRouter } = require('./feedback.routers')
const { tagRouter } = require('./tag.routers')
const { sizeRouter } = require('./size.routers')
const { genderRouter } = require('./gender.routers')
const { productSizeRouter } = require('./productSize.routers')
const rootRouter = express.Router()
const arr =
[
    "/api/role",
    "/api/users",
    "/api/cate",
    "/api/product",
    "/api/galery",
    "/api/order",
    "/api/orderDetails",
    "/api/status",
    "/api/banner",
    "/api/feedback",
    "/api/tag",
    "/api/size",
    "/api/gender",
    "/api/productSize",
]

rootRouter.use('/', (req, res) => {
    return res.send(arr)
})
rootRouter.use('/role', roleRouter)
rootRouter.use('/users', userRouter)
rootRouter.use('/cate', categoryRouter)
rootRouter.use('/product', productRouter)
rootRouter.use('/galery', galeryRouter)
rootRouter.use('/order', orderRouter)
rootRouter.use('/orderDetails', orderDetailsRouter)
rootRouter.use('/status', statusRouter)
rootRouter.use('/banner', bannerRouter)
rootRouter.use('/feedback', feedbackRouter)
rootRouter.use('/tag', tagRouter)
rootRouter.use('/size', sizeRouter)
rootRouter.use('/gender', genderRouter)
rootRouter.use('/productSize', productSizeRouter)

module.exports = {
    rootRouter
}

