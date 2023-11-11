const userModel = require("../models/users")

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
    const phno= await userModel.findOne({phno:req.body.phno})
    if(!phno){
    let user= await userModel.create(req.body)
    res.status(201).send({
        message:"created successfully",
        user
    })}else{
        res.status(400).send({
            message:"exist phno"
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
module.exports = {
    getUSers,
createUser,
getUserByid,
editUserByid,
deleteUserByid}