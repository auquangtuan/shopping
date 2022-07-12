const {Size, Product} = require('../models')


const getAllSize = async (req,res) => {
    const allSize = await Size.findAll({
        include : [
            {
                model : Product
            }
        ]
    })
    res.status(200).send(allSize)
}
const getOneSize = async (req,res) => {
    const {id} = req.params
    const oneSize = await Size.findAll({
        where: {
            id
        },
        include : [
            {
                model : Product
            }
        ]
    })
    res.status(200).send(oneSize)
}
const createSize = async (req,res) => {
    const {size} = req.body
    const addSize = await Size.create({size})
    res.status(201).send(addSize)
}
const editSize = async (req,res) => {
    const {id} = req.params
    const {size} = req.body
    const configSize = await Size.findOne({
        where: {
            id,
        }
    })
    configSize.size = size
    await SizeEdit.save()
    res.status(201).send(SizeEdit)
}
const deleteSize = async (req,res) => {
    const {id} = req.params
    await Size.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllSize,
    createSize,
    editSize,
    deleteSize,
    getOneSize
}