const { Sequelize } = require("sequelize");

const DB_URL =
  "postgres://hvlplghc:dL3YmeUDUQD2iPsZxHY_CSSNBFfZoGxA@ruby.db.elephantsql.com:5432/hvlplghc";

const confDB = new Sequelize(DB_URL);

(async () => {
  try {
    await confDB.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = confDB;
