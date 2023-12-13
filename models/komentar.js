'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coment.belongsTo(models.Artikel);
      Coment.belongsTo(models.User);
    }
  }
  Coment.init({
    name: DataTypes.STRING,
    komentar: DataTypes.TEXT,
    articleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Coment',
  });
  return Coment;
};