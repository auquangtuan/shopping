const { Banner } = require('../models')


const getAllBanner = async (req, res) => {
    const allBanner = await Banner.findAll()
    res.status(200).send(allBanner)
}

const getOneBanner = async (req, res) => {
    const { id } = req.params
    const oneBanner = await Banner.findAll({
        where: {
            id
        }
    })
    res.status(200).send(oneBanner)
}
const createBanner = async (req, res) => {
    const { file } = req;
    const urlImgBanner = `https://backendshopping.herokuapp.com/${file.path}`
    const bannerCreate = await Galery.create({ name: urlImgBanner })
    await bannerCreate.save()
    res.status(200).send(bannerCreate)
}

const deleteBanner = async (req, res) => {
    const { id } = req.params
    await Banner.destroy({
        where: {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllBanner,
    createBanner,
    deleteBanner,
    getOneBanner
}