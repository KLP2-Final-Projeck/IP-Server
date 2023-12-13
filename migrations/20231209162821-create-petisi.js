'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Petisis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numberofSupport: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      target: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
          len:[0, 255],
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hashtag: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      desc1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      desc2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Petisis');
  }
};