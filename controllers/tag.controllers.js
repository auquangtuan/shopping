const {Tag, Product} = require('../models')


const getAllTag = async (req,res) => {
    const allTag = await Tag.findAll({
        include : [
            {
                model : Product
            }
        ]
    })
    res.status(200).send(allTag)
}
const getOneTag = async (req,res) => {
    const {id} = req.params
    const oneTag = await Tag.findAll({
        where: {
            id
        },
        include : [
            {
                model : Product
            }
        ]
    })
    res.status(200).send(oneTag)
}
const createTag = async (req,res) => {
    const {name} = req.body
    const addTag = await Tag.create({name})
    res.status(201).send(addTag)
}
const editTag = async (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const configTag = await Tag.findOne({
        where: {
            id,
        }
    })
    configTag.name = configTag
    await TagEdit.save()
    res.status(201).send(TagEdit)
}
const deleteTag = async (req,res) => {
    const {id} = req.params
    await Tag.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllTag,
    createTag,
    editTag,
    deleteTag,
    getOneTag
}