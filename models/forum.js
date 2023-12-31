'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Forum.belongsTo(models.User);
    }
  }
  Forum.init({
    topic: DataTypes.STRING,
    thread: DataTypes.STRING,
    post: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Forum',
  });
  return Forum;
};