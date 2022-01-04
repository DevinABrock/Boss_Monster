'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class highscores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  highscores.init({
    username: DataTypes.STRING,
    win: DataTypes.STRING,
    souls: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'highscores',
  });
  return highscores;
};