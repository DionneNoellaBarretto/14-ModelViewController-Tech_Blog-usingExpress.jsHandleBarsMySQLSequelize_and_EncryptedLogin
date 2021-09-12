//importing dependencies
require("dotenv").config();
// 3rd party program
const Sequelize = require("sequelize");

let sequelize;

//for heroku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else 
//for connecting to the db using secret creds stored in .env
{
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
// Alternate connection to db could be written as: 
/*

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
*/

module.exports = sequelize;