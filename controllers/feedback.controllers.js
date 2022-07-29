const {Feedback} = require('../models')


const getAllFeedback = async (req,res) => {
    const allFeedback = await Feedback.findAll()
    res.status(200).send(allFeedback)
}
const getOneFeedback = async (req,res) => {
    const {id} = req.params
    const oneFeedback = await Feedback.findAll({
        where: {
            id
        }
    })
    res.status(200).send(oneFeedback)
}
const createFeedback = async (req,res) => {
    //chưa xong
    const {firstName, lastName, email, phone, subjectName, note, status} = req.body
    const addFeedback = await Feedback.create({firstName, lastName, email, phone, subjectName, note, status})
    res.status(201).send(addFeedback)
}
const deleteFeedback = async (req,res) => {
    const {id} = req.params
    await Feedback.destroy({
        where : {
            id
        }
    })
    res.status(200).send("Đã Xóa")
}
module.exports = {
    getAllFeedback,
    createFeedback,
    deleteFeedback,
    getOneFeedback
}