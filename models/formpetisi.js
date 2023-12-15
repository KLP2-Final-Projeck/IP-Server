'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class formPetisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      formPetisi.belongsTo(models.User);
      formPetisi.belongsTo(models.Petisi);
    }
  }
  formPetisi.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    NomorHp: {
      type:DataTypes.INTEGER,
      validate: {
        len: [0, 255],
      }
    },
    kota: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    PetisiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'formPetisi',
  });
  return formPetisi;
};