const express =require("express")
const app = express()
const MongoDBConnection = require('./Config/serverconfig')
const userRouter = require('./Routes/user.route')
const expenseRouter =require('./Routes/expense.route')
const cors = require("cors")
require('dotenv').config()

MongoDBConnection()

app.use(cors())
app.use(express.json())

app.use('/user',userRouter)
app.use('/expense',expenseRouter)


app.listen(process.env.PORT,()=>console.log(`Server is running is ${process.env.PORT} PORT`))
