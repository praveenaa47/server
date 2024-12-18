const users = require('../Model/userSchema')
const bCrypt = require('bcrypt')
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log("inside register function");
    const{username,email,password}=req.body

    try{
        const existingUsers = await users.findOne({email})
        if(existingUsers){
            res.status(406).json('user already exist')
        }else{

            const encryptedPassword = await bCrypt.hash(password,10)
            const newUser = new users({
                username,email,password:encryptedPassword,profilePic:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    }catch(err){
        res.status(401).json(err)
    }
    
}


exports.login=async(req,res)=>{
    console.log("inside login function");
    const{email,password}=req.body

    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
           let isMatch=await bCrypt.compare(password,existingUser.password)
            if(existingUser.password==password||isMatch){
             const token = jwt.sign({userId:existingUser._id},process.env.jwt_secret)
             res.status(200).json({existingUser,token})

            }
        }else{
            res.status(404).json("invalid user")
        }
    }catch(err){
        res.status(401).json(err)
    }
}