const jwt= require('jsonwebtoken')

const jwtMiddleware= (req,res,next)=>{
    console.log('inside jwt middleware');

    try{
        const token = req.Headers['authorization'].split(' ')[1]
        if(token){
            const jwtResponse = jwt.verify(token,process.env.jwt_secret) 
            req.payload=jwtResponse.userId
            next()
        }

    }catch(err){
        res.status(403).json('please login')
    }
    
}
module.exports=jwtMiddleware