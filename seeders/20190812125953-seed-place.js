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
    return queryInterface.bulkInsert('places',[
      {name:"桐生",	id:1},
      {name:"戸田", id:2},
      {name:"江戸川", id:3},
      {name:"平和島", id:4},
      {name:"多摩川", id:5},
      {name:"浜名湖", id:6},
      {name:"蒲郡", id:7},
      {name:"常滑", id:8},
      {name:"津", id: 9},
      {name:"三国", id:10},
      {name:"びわこ", id:11},
      {name:"住之江", id:12},
      {name:"尼崎", id:13},
      {name:"鳴門", id:14},
      {name:"丸亀", id:15},
      {name:"児島", id:16},
      {name:"宮島", id:17},
      {name:"徳山", id:18},
      {name:"下関", id:19},
      {name:"若松", id:20},
      {name:"芦屋", id:21},
      {name:"福岡", id:22},
      {name:"唐津", id:23},
      {name:"大村", id:24},
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('places', null, {});
  }
};
