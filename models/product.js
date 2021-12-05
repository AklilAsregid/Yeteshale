module.exports = (sequelize, Sequelize)=>{
    const Product = sequelize.define("product",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        description:{
            type: Sequelize.STRING,
        },
        price:{
            type: Sequelize.INTEGER,
        },
        address:{
            type: Sequelize.STRING,
        },
        condition:{
            type: Sequelize.STRING,            
        },
        category:{
            type:Sequelize.STRING
        },
        mainCategory:{
            type:Sequelize.STRING
        },
        image:{
            type:Sequelize.STRING
        }

    })
    return Product
    }