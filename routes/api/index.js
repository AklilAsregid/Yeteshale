const router = require('express').Router()
const Category = require('../../controllers/category.controller.js')
const Product = require('../../controllers/product.controller.js')
//retriev all category @route GET api/category 
router.get('/category',Category.findAll)

//create a new Category @route POST api/category
router.post('/category',Category.create)

//delete a Category @route DELETE api/category/:id
router.delete('/category/:id',Category.delete)

//update a Category @route PUT api/category/:id
router.put('/category/:id',Category.update)

// ##############Product Controller############

// create a new Product @router POST api/product
router.post("/product",Product.create)

//retrieve all product based on category @route Get api/category/:category
router.get('/product/:category',Product.findSome)

// retrieve single product with product name @route Get api/product/:url
router.get('/product/:brand/:url',Product.findOne)

//delete a single product @delete api/product/:id
//delete by id get id from local storage
router.delete('/product/:id',Product.delete)

//update a product by the id @put api/product/:id
router.put('/product/:id',Product.update)

module.exports = router