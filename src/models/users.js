 import mongoose from'./index.js'
//  const mongoose=require('mongoose')


const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'required name']
    },
    LastName:{
        type:String,
        required:[true,'last name reqiured']
    },
    email:{
        type:String,
        required:[true,"Email is required"]
        ,validate:validateEmail},
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    phno:{
        type:Number,
        required:[true,'requirednumer']
    },
    status:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:new Date()
    } 
    
},{
    collection:'adarsh'
})

const userModel=mongoose.model('user',userSchema)
export default userModel



