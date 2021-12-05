module.exports = (sequelize, Sequelize)=>{
    const User = sequelize.define("user",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username:{
            type: Sequelize.STRING,
            allowNull:false
        },
        roll:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }
    })
    return User
    }