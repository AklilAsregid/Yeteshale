module.exports = (sequelize, Sequelize)=>{
    const Company = sequelize.define("company",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        phoneNumber:{
            type: Sequelize.STRING
        },
        type:{
            type: Sequelize.STRING
        },
        website:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        address:{
            type: Sequelize.STRING
        }
    })
    return Company
    }