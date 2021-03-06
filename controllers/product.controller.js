const db = require("../models")
const Product = db.product
const Op = db.Sequelize.Op

//create and save new Product

exports.create = (req,res)=>{
// validate request
if(!req.body.name){
    res.status(400).send({
        message : "Product name can not be empty!"
    })
    return;
}
const purl = req.body.name.toLowerCase().trim().split(/\s+/).join('-');
// create a product
// i have to add image with compressing or later..
const product = {
    name:req.body.name,
    description: req.body.description,
    price:req.body.price,
    address:req.body.address,
    condition:req.body.condition,
    category : req.body.category,
    mainCategory : req.body.mainCategory,
    url: purl
}

//Save the Product in the database
Product.create(product).then(data=>{
    res.send(data)
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Some error occured while creating the Product"
    })
})

} 

//Retrieve all Product from database
exports.findAll = (req, res)=>{
    Product.findAll({})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while retrieving Product"
        })
    })
}
//retrieve data for single product with id
exports.findOne = (req,res)=>{
    const url = req.params.url;
    console.log(url)
    Product.findOne({where : {url : url} }).then(data=>{
        if(data){
            res.send(data)
        } else{
            res.status(404).send({
                message: `Cannot find Tutorial with name= ${url}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message:`Error retrieving Tutorial with name= ${url}`
        })
    })
}

//Retrieve product with category and main category from database on future use limit
exports.findSome = (req, res)=>{
    // fetch product with category
    const category = req.params.category;

    Product.findAll({category:category})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while retrieving Product"
        })
    })
}

//Update a Product by the id
exports.update = (req,res)=>{
    const id = req.params.id;

    Product.update(req.body, {
        where: {id : id}
    })
    .then(num=>{
        if(num == 1){
            res.send({
                message: "Product was updated Successfully"
            })
        } else {
            res.send({
                message: `Cannot update Product with id=${id}. maybe Product was not found or req.body is empty!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Product with id= " + id
        })
    })
}

//Delete a Product by the id
exports.delete = (req, res)=>{
    const id = req.params.id;

    Product.destroy({
        where: {id : id}
    })
    .then(num=>{
        if(num == 1){
            res.send({
                message: "Product was deleted succesfully"
            })
        } else{
            res.send({
                message : `Cannot delete product with id = ${id}. Maybe Category was not found!`
            })
        }
    }) 
    .catch(err => {
        res.status(500).send({
            message : "Could not delete Product with id=" + id
        })
    })
}

//Delete all Categories
exports.deleteAll = (req, res)=>{
    Product.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Products were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Categories."
          });
        });
}