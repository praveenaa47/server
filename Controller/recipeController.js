const recipes = require('../Model/recipeSchema')


// getAllRecipes

exports.getAllRecipes=async(req,res)=>{
    console.log("inside get recipe function");

    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        res.status(401).json(err)
    }
    
}


// getaRecipe


exports.getARecipe =async(req,res)=>{
    console.log("inside get a recipe function");
    const{id}=req.params

    try{
        const viewRecipe = await recipes.findOne({_id:id})
        res.status(200).json(viewRecipe)
    }catch(err){
        res.status(401).json(err)
    }
    
}