'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Áo Polo',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    { 
      name: 'Áo thun cổ tròn',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    { 
      name: 'Áo khoác nam',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    { 
      name: 'Quần nam',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    { 
      name: 'Ví nam',      
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    { 
      name: 'Balo nam',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    { 
      name: 'Boxer nam',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    },
    {  
      name: 'Giày nam',
      createdAt: "2022-02-02 00:00:00",
      updatedAt : "2022-02-02 00:00:00"
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};