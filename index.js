const express=require("express")
// import express from "express"
const router=require('./src/Routes/index')
const app=express()

app.use(express.json())

app.use('/',router)


 



app.listen(8000,()=>console.log("server listenning port 8000"))