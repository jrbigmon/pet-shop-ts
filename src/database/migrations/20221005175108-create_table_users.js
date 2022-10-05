'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.STRING(500),
        primaryKey: true,
        allowNull: false
      },
      firstName: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      lastName: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};