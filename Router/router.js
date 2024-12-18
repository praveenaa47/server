const express = require('express')

const recipeController=require('../Controller/recipeController')
const testyMonyController=require('../Controller/testyMonyController')
const userController=require('../Controller/userController')
const jwtMiddleware = require('../Middileware/jwtMiddileware')


const router = new express.Router()


// getALLRecipe

router.get('/all-recipes',recipeController.getAllRecipes)


// add testimony

router.post('/add-testimony',testyMonyController.addTestimonysController)

// register
router.post('/register',userController.register)

// register
router.post('/login',userController.login)

// getarecipe
router.get('/recipe/:id/view',jwtMiddleware,recipeController.getARecipe)



module.exports = router