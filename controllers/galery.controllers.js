const {Galery} =require('../models')
const URL = 'http://localhost'
const PORT = 3333;

const uploadGalery = async (req, res) => {
    const { product_id } = req.body
    const {file} = req
    console.log(file)
    const urlImgGalery = `http://localhost:3333/${file.path}`
    const createGalery = await Galery.create({product_id, urlImgGalery })
    await createGalery.save()
    res.send(createGalery)
}

module.exports = {
    uploadGalery
}