const express = require('express')
require("./db/mongoose")

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

// app.use((req,res,next)=>{
//     res.status(503).send('<h1>Site is under maintenance, please try after some time</h1>')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,() => {
    console.log('Server is up on port ' + port)
})

