'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('product_sizes', [{
      product_id: 1,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 1,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 1,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 1,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 1,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 2,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 2,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 2,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 2,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 2,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 3,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 3,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 3,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 3,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 3,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 4,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 4,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 4,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 4,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 4,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 5,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 5,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 5,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 5,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 5,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 6,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 6,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 6,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 6,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 6,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 7,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 7,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 7,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 7,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 7,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 8,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 8,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 8,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 8,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 8,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 9,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 9,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 9,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 9,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 9,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 10,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 10,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 10,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 10,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 10,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 11,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 11,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 11,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 11,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 11,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 12,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 12,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 12,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 12,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 12,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 13,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 13,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 13,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 13,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 13,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 14,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 14,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 14,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 14,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 14,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 15,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 15,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 15,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 15,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 15,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 16,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 16,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 16,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 16,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 16,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 17,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 17,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 17,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 17,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 17,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 18,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 18,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 18,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 18,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 18,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 19,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 19,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 19,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 19,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 19,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 20,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 20,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 20,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 20,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 20,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 21,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 21,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 21,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 21,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 21,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 22,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 22,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 22,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 22,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 22,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 23,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 23,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 23,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 23,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 23,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 24,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 24,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 24,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 24,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 24,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 25,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 25,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 25,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 25,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 25,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 26,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 26,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 26,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 26,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 26,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 27,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 27,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 27,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 27,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 27,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 28,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 28,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 28,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 28,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 28,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 29,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 29,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 29,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 29,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 29,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 30,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 30,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 30,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 30,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 30,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 31,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 31,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 31,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 31,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 31,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 32,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 32,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 32,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 32,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 32,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 33,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 33,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 33,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 33,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 33,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 34,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 34,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 34,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 34,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 34,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 35,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 35,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 35,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 35,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 35,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 36,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 36,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 36,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 36,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 36,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 37,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 37,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 37,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 37,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 37,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 38,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 38,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 38,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 38,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 38,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 39,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 39,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 39,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 39,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 39,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 40,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 40,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 40,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 40,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 40,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 41,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 41,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 41,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 41,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 41,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 42,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 42,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 42,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 42,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 42,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 43,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 43,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 43,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 43,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 43,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 44,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 44,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 44,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 44,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 44,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 45,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 45,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 45,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 45,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 45,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 46,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 46,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 46,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 46,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 46,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 47,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 47,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 47,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 47,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 47,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 48,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 48,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 48,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 48,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 48,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 49,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 49,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 49,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 49,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 49,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 50,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 50,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 50,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 50,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 50,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 51,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 51,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 51,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 51,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 51,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 52,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 52,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 52,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 52,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 52,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 53,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 53,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 53,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 53,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 53,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 54,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 54,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 54,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 54,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 54,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 55,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 55,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 55,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 55,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 55,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 56,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 56,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 56,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 56,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 56,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 57,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 57,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 57,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 57,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 57,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 58,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 58,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 58,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 58,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 58,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 59,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 59,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 59,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 59,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 59,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 60,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 60,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 60,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 60,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 60,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 61,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 61,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 61,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 61,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 61,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 62,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 62,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 62,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 62,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 62,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 63,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 63,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 63,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 63,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 63,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 64,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 64,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 64,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 64,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 64,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 65,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 65,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 65,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 65,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 65,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 66,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 66,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 66,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 66,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 66,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 67,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 67,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 67,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 67,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 67,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 68,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 68,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 68,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 68,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 68,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 69,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 69,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 69,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 69,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 69,
      amount: 47,
      size_id: 5,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 70,
      amount: 47,
      size_id: 1,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 70,
      amount: 47,
      size_id: 2,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 70,
      amount: 47,
      size_id: 3,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 70,
      amount: 47,
      size_id: 4,
      createdAt: "2022-02-02 00:00:00",
      updatedAt: "2022-02-02 00:00:00"
    },
    {
      product_id: 70,
      amount: 47,
      size_id: 5,
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
