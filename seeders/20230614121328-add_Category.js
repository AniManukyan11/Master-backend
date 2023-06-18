'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [

    
      {
        name: "Թեյ",
        createdAt: new Date(),
        updatedAt: new Date(),
      
      }
      ,
      {
        name: "Սուրճ",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
   

    ], {});
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

