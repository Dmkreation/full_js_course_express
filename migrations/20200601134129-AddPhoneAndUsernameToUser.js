'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'username', { type: Sequelize.STRING }),
      queryInterface.addColumn('Users', 'phone', { type: Sequelize.STRING })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'username'),
      queryInterface.removeColumn('Users', 'phone')
    ])
  }
};
