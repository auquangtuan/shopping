const mkdirp = require('mkdirp')
const multer = require('multer')
const uploadArrImg = (type) => {
    const made = mkdirp.sync(`./public/images/${type}`)
    const storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, `./public/images/${type}`) //setup chỗ lưu file
        },
        filename: function (req, file, callback) {
            callback(null, Date.now() + "_" + file.originalname) // đặt lại tên cho file
        }
    })
    const upload = multer({
        storage: storage, fileFilter: (req, file, callback) => {
            const extendImgList = ['.png', '.jpg']
            const extendImg = file.originalname.slice(-4)
            const check = extendImgList.includes(extendImg);
            if (check) {
                callback(null, true)
            } else {
                callback(new Error("File Không Hợp lệ"))
            }
        }
    })
    return upload.array(type, 12)

}
module.exports = {
    uploadArrImg
}