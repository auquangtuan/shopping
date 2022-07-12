
const {Galery} =require('../models')

const uploadArrGalery = async (req,res) => {
    const { product_id } = req.body
    const {files} = req;

    for(let i = 0; i < files.length ; i++) {   
        console.log(files[i].path)
        const urlImgGalery = `http://localhost:3333/${files[i].path}`   
        const createGalery = await Galery.create({product_id, thumbnail: urlImgGalery })
        await createGalery.save()
        res.end("OK 123")
    }  
}
module.exports = {
    uploadArrGalery
}