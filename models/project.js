'use strict';
const {
  Model, DataTypes
} = require('sequelize');

const sequelize = require('../databases/databaseConnector.js')

  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Project.init({
    projectTitle: DataTypes.STRING,
    projectDescription: DataTypes.STRING,
    projectDueDate: DataTypes.STRING,
    contactId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Contact',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
  })
  
  Project.sync()
  

module.exports = Project