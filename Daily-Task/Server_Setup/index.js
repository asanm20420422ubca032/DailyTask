import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'


dotenv.config()
const app=express();

app.use(express.json())
app.use(cors())

app.use("/api/auth",authRoutes)

const PORT=process.env.PORT || 5000


//http://localhost:3000/api/auth/data

app.listen(PORT,()=>{
    console.log(`server conected successfully running http://localhost:${PORT}`);
})
