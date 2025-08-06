const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle, 
        },
        /*¨ssl:{require: true}*/
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
            }
        }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.netflixs =  require("./netflix.model.js")(sequelize,Sequelize);

module.exports = db;
