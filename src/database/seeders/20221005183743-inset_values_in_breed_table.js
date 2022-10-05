'use strict';

/** @type {import('sequelize-cli').Migration} */

const {
  v4: idGenrator
} = require('uuid')

module.exports = {
  async up(queryInterface, Sequelize) {
    const breeds = [{
        id: idGenrator(),
        name: 'Cat',
        description: 'Mammal animal that can be domesticated or wild',
        domesticated: true
      },
      {
        id: idGenrator(),
        name: 'Dog',
        description: 'Mammal animal that can be domesticated or wild',
        domesticated: true
      },
      {
        id: idGenrator(),
        name: 'Cockatiel',
        description: 'Bird that has the ability to receive commands and be tamed. It can live free in coexistence with other animals.',
        domesticated: true
      }
    ]

    await queryInterface.bulkInsert('breeds', breeds, {});

  },

  async down(queryInterface, Sequelize) {

  }
};