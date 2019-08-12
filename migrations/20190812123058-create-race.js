'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      place_id: {
        type: Sequelize.INTEGER
      },
      dates: {
        type: Sequelize.INTEGER
      },
      grade: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      days: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('races');
  }
};
