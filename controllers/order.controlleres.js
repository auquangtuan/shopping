const {Order, User, Status, Order_Details} = require('../models')
const getAllOrder = async (req,res) => {
    const allOrder = await Order.findAll({
        include : [
            {
                model : User
            },
            {
                model : Status
            }
        ]
    })
    res.status(200).send(allOrder)
}
const createOrder = async (req,res) => {
    const {user_ID,fullname,email,phone,address,note,status} = req.body
    const addOrder = await Order.create({user_ID,fullname,email,phone,address,note,status})
    res.status(201).send(addOrder)
}
const getOneOrder = async (req,res) => {
    const {id} = req.params
    const orDerDetails = await Order.findAll({
        where : {
            id
        },
        include : [
            {
                model : Status
            },
            {
                model : Order_Details
            }
        ]
    })
    console.log(orDerDetails)

    res.status(200).send(orDerDetails)
}
const editOrder = async (req,res) => {
    const {id} = req.params
    const {fullname,email,phone,address,note,status} = req.body
    const OrderEdit = await Order.findOne({
        where: {
            id,
        }
    })
    OrderEdit.fullname = fullname
    OrderEdit.email = email
    OrderEdit.phone = phone
    OrderEdit.address = address
    OrderEdit.note = note
    OrderEdit.status = status
    await OrderEdit.save()
    res.status(201).send(OrderEdit)
}
const deleteOrder = async (req,res) => {
    const {id} = req.params
    await Order.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
const setStatusOrder = async (req,res) => {
    const {id} = req.params
    const {status} = req.body
    const OrderStatus = await Order.findOne({
        where: {
            id
        }
    })
    OrderStatus.status = status
    await OrderStatus.save()
    res.status(201).send(OrderStatus)
}
module.exports = {
    getAllOrder,
    createOrder,
    editOrder,
    deleteOrder,
    getOneOrder,
    setStatusOrder
}