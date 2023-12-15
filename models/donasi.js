'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donasi.belongsTo(models.User);
    }
  }
  Donasi.init({
    nama: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    nomorHp: DataTypes.STRING,
    nomorRekening: DataTypes.STRING,
    formatedValue: DataTypes.STRING,
    nominalValue: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donasi',
  });
  return Donasi;
};