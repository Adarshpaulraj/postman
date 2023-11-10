const coupons=[{
    name:"october offer",
    code:"dkh-jdk",
    startDate:"04-10-2023",
    endDate:"30-11-2023",
    offervalue:100,
    discount:10,
    status:true
},{
    name:"october offer",
    code:"dkh-hii",
    startDate:"10-10-2023",
    endDate:"25-11-2023",
    offervalue:100,
    discount:10,
    status:true
}]


const getAllCoupons=(req,res)=>{
    res.status(200).send({
        message:"hii postman",
        count:coupons.length,

        coupons

    })
}

const getCouponsById=(req,res)=>{
     const id=Number(req.params.id)
    if(id !==NaN&& id<coupons.length)
    res.status(200).send({
        message:"hii postman",
        coupons:coupons[id],
    })
}

const createCoupons=(req,res)=>{
    const data=req.body
    const filterData=coupons.filter((f)=>f.code===data.code)
    if(filterData.length===0){
    coupons.push(data)
    res.status(200).send({
        message:"succesfully created" })
    }else{
    res.status(400).send({
    message:"arlready exsits"
    })
    }
    
    
}



const editCouponsByid=(req,res)=>{
const id =Number(req.params.id)
if(id !==NaN && id<coupons.length){
coupons.splice(id,1,req.body)
res.send("edited")
}else{
res.send("error")
}

}
const deleteCoupons =(req,res)=>{
    const id =req.params.id
    if(id !==NaN && id<coupons.length){
    coupons.splice(id,1)
    res.send("deleted")
    }else{
    res.send("error")
    }
}

module.exports = {
    getAllCoupons,
    getCouponsById,
    deleteCoupons,
    editCouponsByid,
    createCoupons
}