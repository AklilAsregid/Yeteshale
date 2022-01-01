const db = require("../models")
const Category = db.categories
const Op = db.Sequelize.Op

//create and save new category

exports.create = (req,res)=>{
// validate request
if(!req.body.category){
    res.status(400).send({
        message : "Category can not be empty!"
    })
    return;
}

// create a Category
const category = {
    category : req.body.category,
    mainCategory : req.body.mainCategory
}

//Save the category in the database
Category.create(category).then(data=>{
    res.send(data)
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Some error occured while creating the Category"
    })
})

} 

//Retrieve all Category from database
exports.findAll = (req, res)=>{
    Category.findAll({})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while retrieving Category"
        })
    })
}

//Update a Category by the id
exports.update = (req,res)=>{
    const id = req.params.id;

    Category.update(req.body, {
        where: {id : id}
    })
    .then(num=>{
        if(num == 1){
            res.send({
                message: "Category was updated Successfully"
            })
        } else {
            res.send({
                message: `Cannot update Category with id=${id}. aybe Category was not found or req.body is empty!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Category with id= " + id
        })
    })
}

//Delete a Category by the id
exports.delete = (req, res)=>{
    const id = req.params.id;

    Category.destroy({
        where: {id : id}
    })
    .then(num=>{
        if(num == 1){
            res.send({
                message: "Category was deleted succesfully"
            })
        } else{
            res.send({
                message : `Cannot delete category with id = ${id}. Maybe Category was not found!`
            })
        }
    }) 
    .catch(err => {
        res.status(500).send({
            message : "Could not delte Category with id=" + id
        })
    })
}

//Delete all Categories
exports.deleteAll = (req, res)=>{
    Category.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Category were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Categories."
          });
        });
}
