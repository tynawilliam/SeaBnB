'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ name: 'Demo', city: 'Miami', phone: 800535728, email: 'demo@example.com', hashedPassword: createPassword() }),
      r({ name: 'Tyna', city: 'San Diego', phone: 6167992027, email: 'yusuke@example.com', hashedPassword: createPassword() }),
      r({ name: 'Darnell', city: 'Mrytle Beach', phone: 2183567421, email: 'petra@example.com', hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
