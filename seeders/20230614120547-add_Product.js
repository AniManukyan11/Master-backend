'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [

     
      {
        name: "Ֆերմենտացված թեյափունջ",
        price: 1600,
        currency: "AMD",
        img: "http://localhost:3001/uploads/Ֆերմենտացված-թեյափունջ.jpg",
        description:"Բաղադրությունը՝  ֆերմենտացված՝ իվան թեյ, բալի տերևներ, վայրի ազնվամորու տերևներ և իվան թեյի ծաղիկներ:",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Ծաղկունի թեյափունջ",
        price: 1600,
        currency: "AMD",
        img: "http://localhost:3001/uploads/Ծաղկունի-թեյափունջ.jpg",
        description: "Բաղադրությունը ` վայրի հապալասի տերևեներ, սրոհունդ, մոշի տերևներ, դաղձ, վարդի թերթիկներ։",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Արկածային թեյափունջ",
        price: 1600,
        currency: "AMD",
        img: "http://localhost:3001/uploads/Արկածային-թեյափունջ.jpg",
        description: "  Բաղադրությունը ` ուրց, երեքնուկ, վայրի ազնվամորու տերևներ, երիցուկ, նարնջի կեղև,ղանթափա: ",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Կատարյալ թեյափունջ",
        price: 1600,
        currency: "AMD",
        img: "http://localhost:3001/uploads/Կատարյալ-թեյափունջ-700x700.jpg",
        description: "Բաղադրությունը ՝ անթառամ, կիտրոն, դաղձ, վայրի հապալասի և ազնվամորու տերևներ, չորացրած ազնվամորի և հապալաս, վարդի թերթիկներ:",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Ղանթափա",
        price: 700,
        currency: "AMD",
        img: "http://localhost:3001/uploads/ghantapa-1.jpg",
        description: "Բաղադրությունը` Ղանթափա:  ",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Իվան թեյ",
        price: 700,
        currency: "AMD",
        img: "http://localhost:3001/uploads/Իվան-թեյ-700x700.jpg",
        description: "Բաղադրությունը`  Իվան   թեյ:",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Սև և կարմիր մասուր",
        price: 700,
        currency: "AMD",
        img: "http://localhost:3001/uploads/sev-u-karmir-masur-1-700x700.jpg",
        description: "Բաղադրությունը ` Սև և կարմիր մասուր: ",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ,
      {
        name: "Ուրց և դաղձ",
        price: 700,
        currency: "AMD",
        img: "http://localhost:3001/uploads/urc-daxdz-2.jpg",
        description: "Բաղադրությունը`  Ուրց և դաղձ: ",
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
 
      }
      ,
    

    ], {});
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
