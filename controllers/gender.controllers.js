const {Gender, Product} = require('../models')
const getAllGender = async (req,res) => {
    const allGender = await Gender.findAll({
        include : [
            {
                model : Product
            }
        ]
    })
    res.status(200).send(allGender)
}
const getOneGender = async (req,res) => {
    const {id} = req.params
    const oneGender = await Gender.findAll({
        where: {
            id
        },
        include : [
            {
                model : Product
            }
        ]
    })
    res.status(200).send(oneGender)
}
const createGender = async (req,res) => {
    const {gender} = req.body
    const addGender = await Gender.create({gender})
    res.status(201).send(addGender)
}
const editGender = async (req,res) => {
    const {id} = req.params
    const {gender} = req.body
    const GenderEdit = await Gender.findOne({
        where: {
            id,
        }
    })
    GenderEdit.gender = gender
    await GenderEdit.save()
    res.status(201).send(GenderEdit)
}
const deleteGender = async (req,res) => {
    const {id} = req.params
    await Gender.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllGender,
    createGender,
    editGender,
    deleteGender,
    getOneGender
}