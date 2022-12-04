"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "ADMIN",
          createdAt: "2022-02-02 00:00:00",
          updatedAt: "2022-02-02 00:00:00",
        },
        {
          name: "USER",
          createdAt: "2022-02-02 00:00:00",
          updatedAt: "2022-02-02 00:00:00",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
