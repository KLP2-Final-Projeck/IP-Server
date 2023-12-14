'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Artikel, {
        foreignKey: 'ArtikelId',
        as: 'Artikels',
      });

      Comment.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'Users',
      });
  }
}
Comment.init({
  name: DataTypes.STRING,
  komentar: DataTypes.TEXT,
  ArticleId: DataTypes.INTEGER,
  UserId: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'Comment',
});
return Comment;
};