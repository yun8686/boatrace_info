'use strict';
module.exports = (sequelize, DataTypes) => {
  const racer = sequelize.define('racer', {
    name_kanji: DataTypes.STRING,
    name_kana: DataTypes.STRING,
    sibu: DataTypes.STRING,
    grade: DataTypes.STRING,
    sex: DataTypes.INTEGER
  }, {});
  racer.associate = function(models) {
    // associations can be defined here
  };
  return racer;
};
