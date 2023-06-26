import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRouter'
import { categoryRouter } from './routes/categoryRouter'
import { movieRouter } from './routes/movieRouter'

const app = express()

app.use(express.json())
app.use(cors())//trata conexoes de origens diferentes

app.use("/user", userRouter)
app.use("/category", categoryRouter)
app.use("/movie", movieRouter)

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
})
app.get("/", (req, res)=>{res.send("hello word")})
