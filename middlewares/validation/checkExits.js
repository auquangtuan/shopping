const checkExits = (Model) => {
    return async (req,res,next) => {
        const {id} = req.params;
        const DELL = await Model.findOne({
            where: {
                id,
            },
        });
            if(DELL){
                next();
            } else {
                res.status(404).send(`Không tìm thấy, ID = ${id}`)
            }
    }
} 

module.exports = {
    checkExits
}