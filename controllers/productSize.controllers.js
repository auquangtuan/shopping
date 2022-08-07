const { Product_Size, Product,Category, Order_Details} = require('../models')
const getAllProductSize = async (req, res) => {
    const allProductSize = await Product_Size.findAll({
        attributes: ["amount"],
        include: [
            {
                model : Product,
                attributes : ['category_id'],
                include: [
                    {
                        model : Category,
                        attributes: ['name']
                    }
                ]
            },
            {
                model: Order_Details,
                attributes : ['price', 'number', "createdAt","updatedAt"],
            }
            
        ]
    }
    )

    res.status(200).send(allProductSize)
}
const createProductSize = async (req, res) => {
    const { product_ID, size_ID, amount } = req.body
    const addProductSize = await Product_Size.create({ product_ID, size_ID, amount })
    res.status(201).send(addProductSize)
}
const getOneProductSize = async (req, res) => {
    const { id } = req.params
    const oneProductSize = await Product_Size.findAll({
        where: {
            id,
        }
    })
    res.status(200).send(oneProductSize)
}
const editProductSize = async (req, res) => {
    const { id } = req.params
    const { product_ID, size_ID, amount } = req.body
    const productSizeEdit = await Product_Size.findOne({
        where: {
            id,
        }
    })
    productSizeEdit.product_ID = product_ID
    productSizeEdit.size_ID = size_ID
    productSizeEdit.amount = amount
    await productSizeEdit.save()
    res.status(201).send(productSizeEdit)
}
const deleteProductSize = async (req, res) => {
    const { id } = req.params
    await Product_Size.destroy({
        where: {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}

module.exports = {
    getAllProductSize,
    createProductSize,
    editProductSize,
    deleteProductSize,
    getOneProductSize
}