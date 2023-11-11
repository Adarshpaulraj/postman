 const mongoose=require('./index')
//  const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'required name']
    },
    LastName:{
        type:String,
        required:[true,'last name reqiured']
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
module.exports=userModel



