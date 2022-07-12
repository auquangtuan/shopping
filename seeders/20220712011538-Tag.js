'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('tags', [{
      name: 'Đi Chơi',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Đi Làm',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Cá Tính',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Thanh Lịch',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Mạnh Mẽ',
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
