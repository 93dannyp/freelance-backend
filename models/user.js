'use strict';
const {
  Model, DataTypes
} = require('sequelize');

const sequelize = require('../databases/databaseConnector.js')

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   User.associate = (models) => {
    //     User.hasMany(models.Project, {as: 'Projects'})
    //   }
    }
  };
  User.init({
    username: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'User',
  });
  
  User.sync()

module.exports = User