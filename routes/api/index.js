const router = require('express').Router()
const Category = require('../../controllers/category.controller.js')

//retriev all category @route GET api/category 
router.get('/category',Category.findAll)

//create a new Category @route POST api/category
router.post('/category',Category.create)

//delete a Category @route DELETE api/category/:id
router.delete('/category/:id',Category.delete)

//update a Category @route PUT api/category/:id
router.put('/category/:id',Category.update)

module.exports = router