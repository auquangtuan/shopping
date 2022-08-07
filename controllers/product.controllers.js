const { Op } = require('sequelize')
const { Product, Category, Galery, Size, Tag, Gender, Product_Size } = require('../models')
const getAllProduct = async (req, res) => {
    
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    const { title } = req.query
    if (title) {
        const titleProduct = await Product.findAll({
            where: {
                delete : false,
                title: {
                    [Op.like]: `%${title}%`
                },
            }
        })
        res.status(200).send(titleProduct)
    } else if ((limit >= 1) & (offset >= 0)) {
        //
        const pagiProduct = await Product.findAndCountAll({
            where : {
                delete : false
            },  
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
                delete: false
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
    const { title, price, discount, thumbnail, description, category_id, tag_id, gender_ID, S, M, L, XL, XXL } = req.body
    const addProduct = await Product.create({ title, price, discount, thumbnail, description, category_id, tag_id, gender_ID })
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
    await Product_Size.create({ product_ID : id , size_ID : 1 , amount : S})
    await Product_Size.create({ product_ID : id , size_ID : 2 , amount : M})
    await Product_Size.create({ product_ID : id , size_ID : 3 , amount : L})
    await Product_Size.create({ product_ID : id , size_ID : 4 , amount : XL})
    await Product_Size.create({ product_ID : id , size_ID : 5 , amount : XXL})
    res.status(201).send(productFound)
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
    const deleteProduct = await Product.findOne({
        where: {
            id
        }
    })
    deleteProduct.delete = true
    await deleteProduct.save()
    res.status(200).send(deleteProduct)
}
const trueDelete = async (req,res) => {
    const productTrueDel = await Product.findAll({
        where : {
            delete: true
        }
    })
    res.status(200).send(productTrueDel)
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
    getOneProduct,
    uploadThumbnail,
    deleteProduct,
    trueDelete
}