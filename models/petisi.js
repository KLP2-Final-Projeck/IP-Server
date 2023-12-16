'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Petisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      Petisi.hasMany(models.formPetisi);
    }
  }
  Petisi.init({
    numberofSupport: {
      type:DataTypes.INTEGER,
      validate: {
        len: [0, 255],
      }
    },
    target: DataTypes.STRING,
    image: DataTypes.TEXT,
    url: DataTypes.TEXT,
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 30],
      }
    },
    hashtag: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 20],
      }
    },
    desc: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 255],
      }
    },
    desc1: {
    type: DataTypes.TEXT,
    validate: {
      len: [0, 255],
    }
  },
    desc2: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 255],
      }
    },
  }, {
    sequelize,
    modelName: 'Petisi',
  });
  return Petisi;
};