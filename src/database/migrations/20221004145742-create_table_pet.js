'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
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
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: {
            tableName: 'breeds'
          },
          key: 'id'
        },
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  }
};