// const express=require("express")
import express from "express"
import router from './src/Routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
 dotenv.config()
const PORT=process.env.PORT
const app=express()
 app.use(cors())

app.use(express.json())

app.use('/',router)


 



app.listen(PORT,()=>console.log(`server listenning port ${PORT}`))