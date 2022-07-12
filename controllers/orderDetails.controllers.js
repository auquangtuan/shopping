const {Order_Details, Product, Order, User, Status} = require('../models')
const getAllOrderDetails = async (req,res) => {
    const allOrderDetails = await Order_Details.findAll({
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
            },
            {
                model : Status
            }
        ]
    })
    res.status(200).send(allOrderDetails)
}
const createOrderDetails = async (req,res) => {
    const {order_ID,product_ID,price,number,status} = req.body
    const addOrderDetails = await Order_Details.create({order_ID,product_ID,price,number,status})
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
            },
            {
                model : Status
            }
        ]
    })
    res.status(200).send(oneOrderDetails)
}
const setStatusOrder = async (req,res) => {
    const {id} = req.params
    const {status} = req.body
    const OrderDetailsStatus = await Order_Details.findOne({
        where: {
            id
        }
    })
    console.log(OrderDetailsStatus)
    OrderDetailsStatus.status = status
    await OrderDetailsStatus.save()
    res.status(201).send(OrderDetailsStatus)
}

const editOrderDetails = async (req,res) => {
    const {id} = req.params
    const {order_ID,product_ID,price,number, status} = req.body
    const OrderDetailsEdit = await Order_Details.findOne({
        where: {
            id,
        }
    })
    OrderDetailsEdit.order_ID = order_ID
    OrderDetailsEdit.product_ID = product_ID
    OrderDetailsEdit.price = price
    OrderDetailsEdit.number = number
    OrderDetailsEdit.status = status
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
    getOneOrderDetails,
    setStatusOrder
}