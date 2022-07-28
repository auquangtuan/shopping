const { Op } = require('sequelize')
const { Product, Category, Galery, Size, Tag, Gender } = require('../models')
const getAllProduct = async (req, res) => {
    const {title} =req.query
    if(title){
        const titleProduct = await Product.findAll({
            where : {
                title : {
                    [Op.like] : `${title}`
                }
            }
        })
        res.status(200).send(titleProduct)
    } else {
        const allProduct = await Product.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model : Size,
                    
                },
            ]
        })
        res.status(200).send(allProduct)
    }
}
const createProduct = async (req, res) => {
    const { title, price, discount, thumbnail, description, category_id } = req.body
    const addProduct = await Product.create({ title, price, discount, thumbnail, description, category_id })
    res.status(201).send(addProduct)
}
const getOneProduct = async (req, res) => {
    const { id } = req.params
    const oneProduct = await Product.findAll({
        where: {
            id
        },
        include: [
            {
                model : Size,
                // include : [
                //     {
                //         model : Product_Size,
                //         attributes: ['id', 'product_ID', "size_ID", "amount"],
                //     }
                // ]
                
            },
            {
                model: Galery
            },
            {
                model: Category,
                attributes: ['name']
            },
            {
                model: Tag,
                attributes: ['id','name']
            },
            {
                model: Gender,
                attributes: ['gender']
            }
            
        ]
    })
    res.status(200).send(oneProduct)
}
const editProduct = async (req, res) => {
    const { id } = req.params
    const { title, price, discount, thumbnail, description, category_id } = req.body
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
const deleteProduct = async (req, res) => {
    const { id } = req.params
    // await Product.destroy({
    //     where: {
    //         id
    //     }
    // })
    const deleteProduct = await Product.findOne({
        where : id
    })
    deleteProduct.delete = true;
    res.status(200).send("Đã Xóa")
}

const uploadThumbnail = async (req, res) => {
    const { id } = req.params
    const { file } = req;
    const urlIThumbnail = `http://localhost:3333/${file.path}`
    const productFound = await Product.findOne({
        where: {
            id,
        }
    })
    productFound.thumbnail = urlIThumbnail
    await productFound.save()
    res.send(productFound)
}
module.exports = {
    getAllProduct,
    createProduct,
    editProduct,
    deleteProduct,
    getOneProduct,
    uploadThumbnail
}