const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3333;
var cors = require('cors');
app.use(cors());

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const { rootRouter } = require('./routers')

const publicPathDirectory = path.join(__dirname, './public')
app.use('/public', express.static(publicPathDirectory))

app.use(express.json())
app.use('/api', rootRouter)

app.use((err, req, res, next)=>{
    const error = app.get('env') === "development" ? {err: "Development err"} : {err : "Client"}
    const status = err.status || 500
    return res.status(status).json({
        error: {
            message: error.message
        }
    })

})

app.listen(PORT, async () => {
    console.log(`Server Port : ${PORT}`)
    try {
        console.log(`Susscess Port ${PORT}`)
    } catch {
        console.log(`Error Port ${PORT}`)
    }
})