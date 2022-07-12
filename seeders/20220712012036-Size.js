'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sizes', [{
      size: 'S',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      size: 'M',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      size: 'L',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      size: 'XL',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      size: 'XXL',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
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
