module.exports = (sequelize, Sequelize)=>{
const Categories = sequelize.define("categories",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    category:{
        type: Sequelize.STRING
    },
    mainCategory:{
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    }
})
return Categories
}