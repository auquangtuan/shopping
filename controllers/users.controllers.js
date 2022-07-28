const { User, Role, sequelize, Order } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')

const register = async (req, res) => {
    const { fullname, email, phone, address, password, role_id } = req.body

    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
        res.status(404).send({ error: "Email Đã Tồn Tại" })
    } else {
        const salt = bcrypt.genSaltSync(3);
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({ fullname, email, phone, address, password: hashPassword, role_id : 2 })
        res.status(201).send(newUser)
    }
}
const registerAdmin = async (req, res) => {
    const { fullname, email, phone, address, password, role_id } = req.body

    const user = await User.findOne({
        where: {
            email
        }
    })
    if (user) {
        res.status(404).send({ error: "Email Đã Tồn Tại" })
    } else {
        const salt = bcrypt.genSaltSync(3);
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({ fullname, email, phone, address, password: hashPassword, role_id : 1 })
        res.status(201).send(newUser)
    }
}
const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        where: {
            email,
        }
    })
    if (user) {
        const isAuth = bcrypt.compareSync(password, user.password);
        if (isAuth) {
            const asscess_Token = 'Bearer ' + jwt.sign({ email: user.email, fullname: user.fullname, phone: user.phone, address: user.address, role: user.role_id }, "nhom01")
            res.status(200).send({  email: user.email, fullname: user.fullname, phone: user.phone, address: user.address, role: user.role_id, asscess_Token })

        } else {
            res.status(500).send("Tài Khoản Hoặc Mật Khẩu Không Đúng")
        }
    } else {
        res.status(404).send("Tài Khoản Hoặc Mật Khẩu Không Đúng")
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    await User.destroy({
        where: {
            id
        }
    })
    res.status(201).send("Xóa Thành Công")
}
const updateUser = async (req, res) => {
    const { id } = req.params
    const { fullname, phone, address } = req.body
    const userUpdate = await User.findOne({
        where: {
            id
        }
    })
    userUpdate.fullname = fullname
    userUpdate.phone = phone
    userUpdate.address = address
    await userUpdate.save()
    res.status(200).send(userUpdate)
}
const upadtePassword = async (req, res) => {
    const { id } = req.params
    const { passwordOLD, password } = req.body
    const PasswordUpdate = await User.findOne({
        where: {
            id,
        }
    })
    const isAuth = bcrypt.compareSync(passwordOLD, PasswordUpdate.password);
    if (isAuth) {
        const saltUpdate = bcrypt.genSaltSync(11);
        const hashPasswordUpdate = bcrypt.hashSync(password, saltUpdate)
        PasswordUpdate.password = hashPasswordUpdate;
        await PasswordUpdate.save()
        res.status(200).send(PasswordUpdate)
    } else {
        res.status(400).send({ flag: false })
    }

}

const editRole = async (req, res) => {
    const { id } = req.params
    const { role_id } = req.body
    const roleUpdate = await User.findOne({
        where: {
            id,
        }
    })
    roleUpdate.role_id = role_id;
    await roleUpdate.save()
    res.status(200).send(roleUpdate)

}

const getAllUsers = async (req, res) => {
    const { fullname } = req.query
    if (fullname) {
        const UserList = await User.findAll({
            where: {
                name: {
                    [Op.like]: `${fullname}`,
                }
            }
        })
        res.status(200).send(UserList)
    } else {
        const UserList = await User.findAll({
            include: [
                {
                    model: Role,
                },
                {
                    model : Order
                }
            ]
        })
        res.status(200).send(UserList)
    }
}

const findOneUser = async (req, res) => {
    const { id } = req.params
    const findUseOne = await User.findOne({
        where: {
            id,
        },
        include: [
            {
                model: Role,
            },
            {
                model : Order
            }
        ]
    })
    res.status(200).send(findUseOne)
}
const getAllOrder = async (req, res) => {
    const [resuilt] = await sequelize.query(
        `
        SELECT users.fullname, users.phone,orders.address, orders.fullname,orders.phone, orders.note, orders.status , order_details.price, order_details.number, products.price, products.title FROM users
        inner join orders on users.id = orders.user_ID
        inner join order_details on order_details.order_ID = orders.id
        inner join  products on products.id = order_details.product_ID
        `
    )
    res.status(200).send(resuilt)
}
const getOneOrderinUser = async (req,res) => {
    const {id} = req.params
    
    res.status(200).send(id)
}
module.exports = {
    register,
    login,
    deleteUser,
    getAllUsers,
    findOneUser,
    upadtePassword,
    updateUser,
    editRole,
    getAllOrder,
    getOneOrderinUser,
    registerAdmin
}