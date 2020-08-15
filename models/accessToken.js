'use strict';
const {
  Model, DataTypes
} = require('sequelize');

const sequelize = require('../databases/databaseConnector.js')

  class AccessToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   AccessToken.associate = (models) => {
    //     AccessToken.hasMany(models.Project, {as: 'Projects'})
    //   }
    }
  };
  AccessToken.init({
    AccessToken: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'AccessTokens',
  });
  
  AccessToken.sync()

module.exports = AccessToken