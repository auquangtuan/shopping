'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('genders', [{
      gender: 'Nam',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      gender: "Nữ",
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      gender: "Unisex",
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
