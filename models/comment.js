module.exports = (sequelize, Sequelize)=>{
    const Comment = sequelize.define("comment",{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        pid:{
            type: Sequelize.INTEGER,
            allowNull:false
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        status:{
            type: Sequelize.STRING,
        },
        content:{
            type: Sequelize.STRING,            
        },
        rating:{
            type:Sequelize.INTEGER
        }

    })
    return Comment
    }