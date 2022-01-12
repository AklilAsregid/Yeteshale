const db = require("../models")
const Company = require("../models/company")
const Op = db.Sequelize.Op

//Crate and save a new Company data

exports.create = (req,res)=>{
// validate request
if(!req.body.name){
    res.status(400).send({
        message : "Company name can not be empty!"
    })
    return;
}

// create a company
const company = {
    name : req.body.name,
    email : req.body.email,
    phoneNumber : req.body.phoneNumber,
    website : req.body.website,
    description : req.body.description,
    address : req.body.address,
    type : req.body.type
}

//Save the company in the database
Company.create(company).then(data=>{
    res.send(data)
})
.catch(err => {
    res.status(500).send({
        message: err.message || "Some error occured while creating the Company"
    })
})

} 

//Retrieve all Comapany
exports.findAll = (req, res)=>{
    Company.findAll({})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while retrieving Company"
        })
    })
}

//Update a company by the id
exports.update = (req,res)=>{
    const id = req.params.id;

    Company.update(req.body, {
        where: {id : id}
    })
    .then(num=>{
        if(num == 1){
            res.send({
                message: "Company was updated Successfully"
            })
        } else {
            res.send({
                message: `Cannot update Company with id=${id}. maybe Company was not found or req.body is empty!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Company with id= " + id
        })
    })
}

//Delete a Company by the id
exports.delete = (req, res)=>{
    const id = req.params.id;

    Company.destroy({
        where: {id : id}
    })
    .then(num=>{
        if(num == 1){
            res.send({
                message: "Company was deleted succesfully"
            })
        } else{
            res.send({
                message : `Cannot delete company with id = ${id}. Maybe Company was not found!`
            })
        }
    }) 
    .catch(err => {
        res.status(500).send({
            message : "Could not delete Company with id=" + id
        })
    })
}

//Delete all Company
exports.deleteAll = (req, res)=>{
    Company.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Company were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Company."
          });
        });
}
