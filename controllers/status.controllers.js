const {Status, Order_Details, Order, User} = require('../models')


const getAllStatus = async (req,res) => {
    const allStatus = await Status.findAll({
        // include : [
        //     {
        //         model : Order_Details,
        //         include  : [
        //             {
        //                 model : Order
        //             }
        //         ]
        //     }
        // ]
    })
    res.status(200).send(allStatus)
}
const getOneStatus = async (req,res) => {
    const {id} = req.params
    const oneStatus = await Status.findAll({
        where: {
            id
        },
        include : [
            {
                model : Order_Details,
                include  : [
                    {
                        model : Order,
                        include : [
                            {
                                model : User
                            }
                        ]
                    }
                ]
            }
        ]
    })
    res.status(200).send(oneStatus)
}
const createStatus = async (req,res) => {
    const {name} = req.body
    const addStatus = await Status.create({name})
    res.status(201).send(addStatus)
}
const editStatus = async (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const configStatus = await Status.findOne({
        where: {
            id,
        }
    })
    configStatus.name = configStatus
    await StatusEdit.save()
    res.status(201).send(StatusEdit)
}
const deleteStatus = async (req,res) => {
    const {id} = req.params
    await Status.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllStatus,
    createStatus,
    editStatus,
    deleteStatus,
    getOneStatus
}