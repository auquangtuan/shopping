const authorrize = (arrType) => (req,res,next) => {
    const {user} = req
    if( arrType.findIndex((ele) => ele === user.type ) > -1 ) {
        next();
    } else {
        res.status(403).send({message: "Đã Đăng Nhập", author : false})
    }
}

module.exports = {
    authorrize
}