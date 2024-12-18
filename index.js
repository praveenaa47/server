//loads env file contents into process.env by default

require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Config/connection')
const router =require('./Router/router')


const tastyrecipes=express()

tastyrecipes.use(cors())
tastyrecipes.use(express.json())
tastyrecipes.use(router)

 
const PORT = 3000 || process.env.PORT

tastyrecipes.listen(PORT,()=>{
    console.log(`tastyrecipes started running at PORT:${PORT}`);
    
})

tastyrecipes.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Recipe world started running</h1>`)})