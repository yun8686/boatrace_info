'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    },{
      timestamps: false,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('places');
  }
};
