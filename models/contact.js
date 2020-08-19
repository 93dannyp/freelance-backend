'use strict';
const {
  Model, DataTypes
} = require('sequelize');

const sequelize = require('../databases/databaseConnector.js')

  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.associate = (models) => {
        Contact.hasMany(models.Project, {as: 'Projects'})
      }
    }
  };
  Contact.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    company: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    img: DataTypes.STRING,
    lead: DataTypes.BOOLEAN,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contact',
  });
  
  Contact.sync()

module.exports = Contact

  // lead: DataTypes.BOOLEAN,
    // notes: DataTypes.STRING