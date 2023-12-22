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
          len: [0, 255],
        },
      },
      descArtikel: {
        type: DataTypes.TEXT,
      },
      author: {
        type: DataTypes.STRING,
      },
      date: DataTypes.DATE,
      category: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      image: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Artikel",
    }
  );
  return Artikel;
};
