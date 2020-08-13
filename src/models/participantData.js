const { DataTypes } = require("sequelize");
const confDB = require("../config/confDB");

const Participant = confDB.define("participant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "last_name"
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "gender"
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "profession"
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "experience"
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "address"
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "city"
  },
  contact: {
    type: DataTypes.BIGINT,
    allowNull: false,
    field: "contact"
  }
});

module.exports = Participant;
