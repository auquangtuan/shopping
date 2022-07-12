const authorrize = (arrType) => (req,res,next) => {
    const {user} = req
    console.log(user)
    if( user.role === 1 ) {
        next();
    } else {
        res.status(403).send({Message: "Đã Đăng Nhập", Warning: "Không phải Admin" ,Author : false})
    }
}

module.exports = {
    authorrize
}