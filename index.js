const express=require("express")
// import express from "express"
const router=require('./src/Routes/index')
require('dotenv').config()
const PORT=process.env.PORT
const app=express()
const cors=require('cors')
app.use(cors())

app.use(express.json())

app.use('/',router)


 



app.listen(PORT,()=>console.log(`server listenning port ${PORT}`))