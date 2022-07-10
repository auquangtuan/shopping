const {Product, Category, Galery} = require('../models')
const getAllProduct = async (req,res) => {
    const allProduct = await Product.findAll({
        include: [
            {
                model : Galery
            }
        ]
    })
    res.status(200).send(allProduct)
}
const createProduct = async (req,res) => {
    const {title,price,discount,thumbnail,description,category_id} = req.body
    const addProduct = await Product.create({title,price,discount,thumbnail,description,category_id})
    res.status(201).send(addProduct)
}
const getOneProduct = async (req,res) => {
    const {id} = req.params
    const oneProduct = await Product.findAll({
        where: {
            id
        },
        include : [
            {
                model: Category
            },
            {
                model : Galery
            }
        ]
    })
    res.status(200).send(oneProduct)
}
const editProduct = async (req,res) => {
    const {id} = req.params
    const {title,price,discount,thumbnail,description,category_id} = req.body
    const productEdit = await Product.findOne({
        where: {
            id,
        }
    })
    productEdit.title = title
    productEdit.price = price
    productEdit.discount = discount
    productEdit.thumbnail = thumbnail
    productEdit.description = description
    productEdit.category_id = category_id
    await productEdit.save()
    res.status(201).send(productEdit)
}
const deleteProduct = async (req,res) => {
    const {id} = req.params
    await Product.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllProduct,
    createProduct,
    editProduct,
    deleteProduct,
    getOneProduct
}