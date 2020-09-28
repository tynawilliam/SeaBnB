'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Boats', [
      r({ name: 'Annabelle', type: 'Yacht', description: 'Luxury on the ocean', startDate: '10-7-2020', endDate: '2-8-2021', rate: 1200 }),
      r({ name: 'Island Breeze', type: 'Sailboat', description: 'Family friendly sailboat', startDate: '11-15-2020', endDate: '3-12-2021', rate: 300 }),
      r({ name: 'Catcher', type: 'Catamaran', description: 'Fun in the sun', startDate: '12-10-2020', endDate: '7-5-2021', rate: 850 }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Boats');
  }
};
