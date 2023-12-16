"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artikel.hasMany(models.Comment);
    }
  }
  Artikel.init(
    {
      titleArtikel: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 30],
        },
      },
      descArtikel: {
        type: DataTypes.TEXT,
        validate: {
          len: [0, 255],
        },
      },
      date: DataTypes.STRING,
      category: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Artikel",
    }
  );
  return Artikel;
};
