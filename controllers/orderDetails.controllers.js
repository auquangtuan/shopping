const { Order_Details, Order, User, Product_Size, sequelize } = require('../models')
const getAllOrderDetails = async (req, res) => {
    const allOrderDetails = await Order_Details.findAll({
        include: [
            {
                model: Order,
                include: [
                    {
                        model: User
                    }
                ]
            }
        ]
    })
    res.status(200).send(allOrderDetails)
}
const createOrderDetails = async (req, res) => {
    const { order_ID, price, number, productSize } = req.body
    const id = productSize;
    const addOrderDetails = await Order_Details.create({ order_ID, price, number, productSize })
    const updateNumber = await Product_Size.findOne({
        where: {
            id
        }
    })
    console.log(updateNumber)
    updateNumber.amount = (updateNumber.amount - number)
    await updateNumber.save()
    res.status(201).send(addOrderDetails)
}
const getOneOrderDetails = async (req, res) => {
    const { id } = req.params
    const oneOrderDetails = await Order_Details.findAll({
        where: {
            id
        },
        include: [
            {
                model: Order,
                include: [
                    {
                        model: User
                    }
                ]
            }
        ]
    })
    res.status(200).send(oneOrderDetails)
}

const editOrderDetails = async (req, res) => {
    const { id } = req.params
    const { order_ID, price, number, productSize } = req.body
    const OrderDetailsEdit = await Order_Details.findOne({
        where: {
            id,
        }
    })
    OrderDetailsEdit.order_ID = order_ID
    OrderDetailsEdit.price = price
    OrderDetailsEdit.number = number
    OrderDetailsEdit.productSize = productSize
    await OrderDetailsEdit.save()
    res.status(201).send(OrderDetailsEdit)
}
const deleteOrderDetails = async (req, res) => {
    const { id } = req.params
    await Order_Details.destroy({
        where: {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
const postOrder = async (req, res) => {
    const { user_ID, fullname, email, phone, address, note, arr } = req.body

    const createOrder = await Order.create({ user_ID, fullname, email, phone, address, note })
    
    for (let i = 0; i < arr.length; i++) {


            const [getProductSizes] = await sequelize.query(
                `
                select product_sizes.id from product_sizes
                where product_sizes.product_ID = ${arr[i].product_ID} and product_sizes.size_ID = ${arr[i].size_ID}
                `
            )
    
            const productSizes = getProductSizes[0].id
    
    
            await Order_Details.create({ order_ID: createOrder.id, price: arr[i].price, number: arr[i].number, productSize: productSizes })
    
            const updateAmount = await Product_Size.findOne({
                where: {
                    id : productSizes
                }
            })
            updateAmount.amount = (updateAmount.amount - arr[i].number)
            await updateAmount.save()
        }
        res.status(201).send({messgage : 'Đặt Hàng Thành Công', createOrder})
}
module.exports = {
    getAllOrderDetails,
    createOrderDetails,
    editOrderDetails,
    deleteOrderDetails,
    getOneOrderDetails,
    postOrder
}