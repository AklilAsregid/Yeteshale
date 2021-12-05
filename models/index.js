const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require("./categories.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize,Sequelize)
db.comment = require("./comment.js")(sequelize,Sequelize)
db.product = require("./product.js")(sequelize,Sequelize)
db.company = require("./company.js")(sequelize,Sequelize)
module.exports = db;