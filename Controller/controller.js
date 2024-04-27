// const{insertservice}= require('../service/service')
// const{indata,fetch,fetchall}= require('../service/service')
const {signup,signin} = require('../service/service')
exports.insertcontroller=async(req,res)=>{
    try {
        const index= await signup (req)
        res.json({
            data1:index,
            message:"done",
            status:index.status
        })
        
    } catch (error) {
        res.json({message:"role not found"})
        
    }
 

}
exports.fetchcon=async(req,res)=>{
    try {
        const kk= await signin(req) 
        console.log(">>>>>>>>>",kk);
        res.json({
            data:kk.data,
            message:kk.message,
            status:kk.status
        })
        
    } catch (error) {
        
        res.json({message:"error",throw:error})
    }

}
exports.fetchconn=async(req,res)=>{
    try {
        const kk= await fetchall(req) 
        console.log(">>>>>>>>>",kk);
        res.json({
            data:kk.data,
            message:kk.mesage,
          
            status:kk.status
        })
        
    } catch (error) {
        
        res.json({message:"error",throw:error})
    }

}