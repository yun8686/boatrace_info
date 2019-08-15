'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('racelists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      race_id: {
        type: Sequelize.BIGINT
      },
      race_num: {
        type: Sequelize.BIGINT
      },
      limit_time: {
        type: Sequelize.DATE
      },
      weather: {
        type: Sequelize.STRING
      },
      wind_vec: {
        type: Sequelize.STRING
      },
      wind_pow: {
        type: Sequelize.STRING
      },
      wave_pow: {
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
    return queryInterface.dropTable('racelists');
  }
};
