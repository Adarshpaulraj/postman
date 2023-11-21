import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const hashPassword=async (password)=>{
let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
console.log(salt)
let hash =await bcrypt.hash(password,salt)
return hash
}
const hashCompare=async(password,hash)=>{
    return await bcrypt.compare(password,hash)
}

const createToken=async(payload)=>{
    const token= await jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
    return token
}
const decodeToken=async(token)=>{
    const payload=await jwt.decode(token)
    return payload
}
const validate =async(req,res,next)=>{
    const token= await req.headers.authorization?.split(" ")[1]
    if(token)
    {
        let payload=await decodeToken(token)
        let currentTime=(+new Date())/1000
        console.log(currentTime);
        if(currentTime<payload.exp)
        next()
       else
       res.status(400).send({message:"expired token"})

    }else{
        res.status(400).send({
            message:"not found"
        })
    }
}
const adminGaurd =async(req,res,next)=>{
    const token= await req.headers.authorization?.split(" ")[1]
    if(token)
    {
        let payload=await decodeToken(token)
        if(payload.firstName=="avegers")
        next()
    else
    res.status(400).send({message:"admins are allowed"})        

    }else{
        res.status(400).send({
            message:"not found"
        })
    }
}

export default { 
    hashPassword,
    hashCompare,
    createToken,
    validate,
    adminGaurd
}