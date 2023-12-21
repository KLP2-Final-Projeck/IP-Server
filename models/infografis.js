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
        len:[0, 255],
      }
    },
    gambar: {
      type: DataTypes.TEXT,
      len: [0, 255], 
    },
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Infografis',
  });
  return Infografis;
};