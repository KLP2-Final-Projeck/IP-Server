"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Comment, {
        foreignKey: "UserId",
        as: "Comments",
      });

      User.hasMany(models.Donasi, {
        foreignKey: "UserId",
        as: "Donasis",
      });

      User.hasMany(models.Forum, {
        foreignKey: "UserId",
        as: "Forums",
      });

      User.hasMany(models.formPetisi, {
        foreignKey: "UserId",
        as: "Petisis",
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Nama pengguna sudah dipakai! Silakan pilih yang lain.",
        },
      },
      password: {
        type: DataTypes.TEXT,
        validate: {
          len: [8, 20],
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      telepon: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 20],
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user, options) =>{
          user.password = bcrypt.hashSync(user.password, saltRounds);
        },
      },
    }
  );
  return User;
};
