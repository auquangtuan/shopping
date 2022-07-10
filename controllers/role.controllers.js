const {Role, User} = require('../models')
const getAllRole = async (req,res) => {
    const allRole = await Role.findAll()
    res.status(200).send(allRole)
}
const getOneRole = async (req,res) => {
    const {id} = req.params
    const oneRole = await Role.findAll({
        where: {
            id
        },
        include : [
            {
                model : User
            }
        ]
    })
    res.status(200).send(oneRole)
}
const createRole = async (req,res) => {
    const {name} = req.body
    const addRole = await Role.create({name})
    res.status(201).send(addRole)
}
const editRole = async (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const roleEdit = await Role.findOne({
        where: {
            id,
        }
    })
    roleEdit.name = name
    await roleEdit.save()
    res.status(201).send(roleEdit)
}
const deleteRole = async (req,res) => {
    const {id} = req.params
    await Role.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllRole,
    createRole,
    editRole,
    deleteRole,
    getOneRole
}