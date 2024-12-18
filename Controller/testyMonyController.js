const testimonys =require('../Model/testiMonySchema')


// addtestimonys

exports.addTestimonysController=async(req,res)=>{
    console.log("inside testimony function");
    const{name,email,message}=req.body

    try{
        const newMessage = new testimonys({
            name,email,message
        })
        await newMessage.save()
        res.status(200).json(newMessage)
    }catch(err){
        res.status(401).json(err)
    }
    
}