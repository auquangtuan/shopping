const jwt = require('jsonwebtoken')

const authentication = (req,res,next) => {
    const token = req.header("asscess_Token");
    try {
        const decode = jwt.verify(`Bearer ${token}`, "nhom01")
        if(decode) {
            req.user = decode;
            return next()
        } else {
            res.status(401).send("Bạn Chưa Đăng Nhập")
        }
    } catch (error) {
        res.status(500).send("Chưa Đăng Nhập")
        res.status(500).send(error)
    }
}

module.exports = {
    authentication
}