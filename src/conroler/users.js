import userModel from"../models/users.js"
import Auth from '../common/auth.js'

const getUSers=async(req,res)=>{
    try {
        let users=await userModel.find()
        res.status(200).send({
            message:"fetched succesfully",
            users
        })
    } catch (error) {
        res.status(400).send({
            message:"internal server error",
            error
        }) 
    }
  
}
const createUser=async(req,res)=>{
try {
    const email= await userModel.findOne({email:req.body.email})
    if(!email){
        req.body.password=await Auth.hashPassword(req.body.password)
    let user= await userModel.create(req.body)
    res.status(201).send({
        message:"created successfully",
        user
    })}else{
        res.status(400).send({
            message:"exist email"
        })
    }

} catch (error) {
    res.status(400).send({
        message:"internal server error",
        error
    })
}
}

const getUserByid=async(req,res)=>{
    try {
        const user= await userModel.findOne({_id:req.params.id})
         
         res.status(200).send({
            message:"get successfully",
            user
        }) 
    } catch (error) {
        res.status(400).send({
            message:"internal server error",
            error
        })
    }
    }
const editUserByid= async (req,res)=>{
    try {
        const user=await userModel.findOne({_id:req.params.id})
        if(user){
            await userModel.updateOne({_id:req.params.id},{
                $set:req.body
            })
            res.status(200).send({
                message:"updated"
            })
        }
        
    } catch (error) {
        res.status(400).send({
            message:"internal server error",
            error
        })
    }
}


const deleteUserByid= async (req,res)=>{
    try {
        const user=await userModel.findOne({_id:req.params.id})
       
            await userModel.deleteOne({_id:req.params.id} )
            res.status(200).send({
                message:"deleted successfully"
            })
        
        
    } catch (error) {
        res.status(400).send({
            message:"internal server error",
            error
        })
    }
}


const login =async(req,res)=>{
    try {
        const user= await userModel.findOne({email:req.body.email})
        if(user){
             let hashCompare=await Auth.hashCompare(req.body.password,user.password)
             if(hashCompare){
                const token= await Auth.createToken({
                    firstName:user.firstName,
                    LastName:user.LastName,
                    phno:user.phno
                })
                console.log("hii")
                 res.status(200).send({
                    message:"login successfully",
                    token
                 })
             }else{
                res.status(400).send({
                    message:"invalid password"
                }) 
             }
        }else{
            res.status(400).send({
                message:"does not exist"
            
            })
        }
    } catch (error) {
        res.status(400).send({
            message:"internal server error",
            error:error.message
        })
    }
}

export default {
    getUSers,
createUser,
getUserByid,
editUserByid,
deleteUserByid,
login}