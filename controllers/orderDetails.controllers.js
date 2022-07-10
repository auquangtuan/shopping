const {Order_Details, Product, Order, User} = require('../models')
const getAllOrderDetails = async (req,res) => {
    const allOrderDetails = await Order_Details.findAll()
    res.status(200).send(allOrderDetails)
}
const createOrderDetails = async (req,res) => {
    const {order_ID,product_ID,price,number} = req.body
    const addOrderDetails = await Order_Details.create({order_ID,product_ID,price,number})
    res.status(201).send(addOrderDetails)
}
const getOneOrderDetails = async (req,res) => {
    const {id} = req.params
    const oneOrderDetails = await Order_Details.findAll({
        where: {
            id
        },
        include : [
            {
                model : Order,
                include: [
                    {
                        model : User
                    }
                ]
            },
            {
                model : Product
            }
        ]
    })
    res.status(200).send(oneOrderDetails)
}
const editOrderDetails = async (req,res) => {
    const {id} = req.params
    const {order_ID,product_ID,price,number} = req.body
    const OrderDetailsEdit = await Order_Details.findOne({
        where: {
            id,
        }
    })
    OrderDetailsEdit.order_ID = order_ID
    OrderDetailsEdit.product_ID = product_ID
    OrderDetailsEdit.price = price
    OrderDetailsEdit.number = number
    await OrderDetailsEdit.save()
    res.status(201).send(OrderDetailsEdit)
}
const deleteOrderDetails = async (req,res) => {
    const {id} = req.params
    await Order_Details.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllOrderDetails,
    createOrderDetails,
    editOrderDetails,
    deleteOrderDetails,
    getOneOrderDetails
}