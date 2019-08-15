'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('racers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_kanji: {
        type: Sequelize.STRING
      },
      name_kana: {
        type: Sequelize.STRING
      },
      sibu: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.INTEGER
      },
    },{
      timestamps: false,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('racers');
  }
};
