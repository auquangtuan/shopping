const {getAllUsers, deleteUser,editRole,findOneUser,login,register,upadtePassword,updateUser, getAllOrder, getOneOrderinUser, registerAdmin  } = require('../controllers/users.controllers')
const { authentication } = require('../middlewares/authentication/authentication')
const { authorrize } = require('../middlewares/authentication/authorrize')
const { checkExits } = require('../middlewares/validation/checkExits')
const {User} = require('../models')
const userRouter = require('express-promise-router')()

userRouter.route('/')
    .get(getAllUsers)
userRouter.route('/userOrder/')
    .get(getAllOrder)
userRouter.route('/userOrder/:id')
    .get(getOneOrderinUser)
userRouter.route('/:id')
    .get(findOneUser)
    .delete(checkExits(User),authentication,authorrize([1]),deleteUser)
    .put(authentication,authorrize([1]),updateUser)
userRouter.route('/role/:id')
    .put(authentication,authorrize([1]),editRole)
userRouter.route('/changePass/:id')
    .post(authentication,upadtePassword)
userRouter.route('/register')
    .post(register)
userRouter.route('registerAdmin')
    .post(authentication,authorrize([1]),registerAdmin)
userRouter.route('/login')
    .post(login)
module.exports = {
    userRouter
}



