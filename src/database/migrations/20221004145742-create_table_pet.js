'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        type: Sequelize.DataTypes.STRING(500),
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      age: {
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      needVaccine: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      vaccinated: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
      },
      breed_id: {
        type: Sequelize.DataTypes.STRING(500),
        references: {
          model: {
            tableName: 'breeds'
          },
          key: 'id'
        },
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
    await queryInterface.dropTable('pets');
  }
};