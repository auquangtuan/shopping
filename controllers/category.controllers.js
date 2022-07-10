const {Category, Product} = require('../models')
const getAllCategory = async (req,res) => {
    const allCategory = await Category.findAll()
    res.status(200).send(allCategory)
}
const createCategory = async (req,res) => {
    const {name} = req.body
    const addCategory = await Category.create({name})
    res.status(201).send(addCategory)
}
const getOneCategory = async (req,res) => {
    const {id} = req.params
    const oneCategory = await Category.findAll({
        where: {
            id
        },
        include : [
            {
                model: Product
            }
        ]
    })
    res.status(200).send(oneCategory)
}
const editCategory = async (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const categoryEdit = await Category.findOne({
        where: {
            id,
        }
    })
    categoryEdit.name = name
    await categoryEdit.save()
    res.status(201).send(categoryEdit)
}
const deleteCategory = async (req,res) => {
    const {id} = req.params
    await Category.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllCategory,
    createCategory,
    editCategory,
    deleteCategory,
    getOneCategory
}