'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('breeds', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      domesticated: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('breeds');
  }
};