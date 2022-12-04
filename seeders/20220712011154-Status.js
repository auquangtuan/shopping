'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Statuses', [{
      name: 'Đang Xử Lý',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Đã Được Xử Lý',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Vận Chuyển',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Hoàn Lại',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Hoàn Thành',
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      name: 'Bị Hủy Bỏ',
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
