const { Op } = require('sequelize')
const { Product, Category, Galery, Size, Tag, Gender } = require('../models')
const getAllProduct = async (req, res) => {
    const arr = [{
        "price": 12,
        "boolean": true
    },
    {
        "price": 34,
        "boolean": true
    }
    ]
    if (arr.boolean) {

    }
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    const { title } = req.query
    if (title) {
        const titleProduct = await Product.findAll({
            where: {
                title: {
                    [Op.like]: `${title}`
                }
            }
        })
        res.status(200).send(titleProduct)
    } else if ((limit >= 1) & (offset >= 0)) {
        //
        const pagiProduct = await Product.findAndCountAll({
            limit: limit,
            offset: limit * offset,
            order: [
                ['id', 'ASC']
            ]
        })
        res.status(200).send(pagiProduct)
        //
    } else {
        const allProduct = await Product.findAll({
            where: {

            },
            include: [
                {
                    model: Category,
                    attributes: ['name']
                },
                {
                    model: Size,

                },
            ]
        })
        res.status(200).send(allProduct)
    }
}
const createProduct = async (req, res) => {
    const { title, price, discount, thumbnail, description, category_id, tag_id, gender_ID } = req.body
    const addProduct = await Product.create({ title, price, discount, thumbnail, description, category_id, tag_id, gender_ID })
    //
    const { id } = addProduct
    const { file } = req;
    const urlIThumbnail = `https://backendshopping.herokuapp.com/${file.path}`
    const productFound = await Product.findOne({
        where: {
            id,
        }
    })
    productFound.thumbnail = urlIThumbnail
    await productFound.save()
    res.send(productFound)
    //
    // res.status(201).send(addProduct)
}
const getOneProduct = async (req, res) => {
    const { id } = req.params
    const oneProduct = await Product.findAll({
        where: {
            id
        },
        include: [
            {
                model: Size,
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
                attributes: ['id', 'name']
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
    const { file } = req;
    const productEdit = await Product.findOne({
        where: {
            id,
        }
    })
    if (file) {
        const urlIThumbnail = `https://backendshopping.herokuapp.com/${file.path}`
        productEdit.thumbnail = urlIThumbnail
        productEdit.title = title
        productEdit.price = price
        productEdit.discount = discount
        productEdit.description = description
        productEdit.category_id = category_id
    } else {
        productEdit.thumbnail = productEdit.thumbnail
        productEdit.title = title
        productEdit.price = price
        productEdit.discount = discount
        productEdit.description = description
        productEdit.category_id = category_id
    }
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
        where: id
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