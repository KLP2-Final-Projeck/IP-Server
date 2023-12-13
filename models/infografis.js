'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Infografis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Infografis.init({
    judul: {
      type: DataTypes.STRING,
      validate: {
        len:[5, 40],
      }
    },
    gambar: DataTypes.TEXT,
    url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Infografis',
  });
  return Infografis;
};