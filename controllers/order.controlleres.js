const {Order, User} = require('../models')
const getAllOrder = async (req,res) => {
    const allOrder = await Order.findAll()
    res.status(200).send(allOrder)
}
const createOrder = async (req,res) => {
    const {user_ID,fullname,email,phone,address,note,status} = req.body
    const addOrder = await Order.create({user_ID,fullname,email,phone,address,note,status})
    res.status(201).send(addOrder)
}
const getOneOrder = async (req,res) => {
    const {id} = req.params
    const oneOrder = await Order.findAll({
        where: {
            id
        },
        include : [
            {
                model : User
            }
        ]
    })
    res.status(200).send(oneOrder)
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
module.exports = {
    getAllOrder,
    createOrder,
    editOrder,
    deleteOrder,
    getOneOrder
}