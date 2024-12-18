const mongoose = require('mongoose')

const connectionString = process.env.DB_Connection

mongoose.connect(connectionString).then(res=>{
    console.log('DB Successfully connected');
    
}).catch(err=>{
    console.log('MongoDB Connection Failed');
    console.log(err);
    
    
})