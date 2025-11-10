export const authController=(req,res)=>{
    console.log(req.body);
     const {name}=req.body
     res.status(200).json({mes:"successfully done"})
}