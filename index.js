const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT;
var cors = require('cors');
app.use(cors());
const { rootRouter } = require('./routers')

const publicPathDirectory = path.join(__dirname, './public')
app.use('/public', express.static(publicPathDirectory))

app.use(express.json())
app.use('/api', rootRouter)

app.use((err, req, res, next)=>{
    const error = app.get('env') === "development" ? {err: "Deve Loi"} : {err : "nodeDeve"}
    const status = err.status || 500
    return res.status(status).json({
        error: {
            message: error.message
        }
    })

})

app.listen(PORT || 3333, async () => {
    console.log(`Server Port : ${PORT}`)
    try {
        console.log(`Susscess Port ${PORT}`)
    } catch {
        console.log(`Error Port ${PORT}`)
    }
})