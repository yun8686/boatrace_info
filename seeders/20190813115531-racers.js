'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const fs = require('fs');
    const iconv = require('iconv-lite');
    const Encoding = require('encoding-japanese');
    const text = Encoding.convert(fs.readFileSync(__dirname+'/../seedFile/fan1904.txt'), {
      from: 'SJIS', // 変換元の文字コード
      to: 'UNICODE', // JavaScriptの文字コード
      type: 'string',
    });
    const list = text.trim().split("\r\n").map(v=>{
      return {
        id: v.substring(0,4),
        name_kanji: v.substring(4,12),
        name_kana: v.substring(12,27),
        sibu: v.substring(27,29),
        grade: v.substring(29,31),
        sex: v.substring(38,39),
      };
    });
    return queryInterface.bulkInsert('racers', list);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('racers', null, {});
  }
};
