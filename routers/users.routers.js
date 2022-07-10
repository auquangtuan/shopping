const {getAllUsers, deleteUser,editRole,findOneUser,login,register,upadtePassword,updateUser, getAllOrder, getOneOrderinUser  } = require('../controllers/users.controllers')
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
    .delete(checkExits(User),authentication,authorrize(['ADMIN']),deleteUser)
    .put(authentication,authorrize(['ADMIN']),updateUser)
userRouter.route('/role/:id')
    .put(authentication,authorrize(['ADMIN']),editRole)
userRouter.route('/changePass/:id')
    .post(authentication,upadtePassword)
userRouter.route('/register')
    .post(register)
userRouter.route('/login')
    .post(login)
module.exports = {
    userRouter
}



