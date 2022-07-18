'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_ID: {
        type: Sequelize.INTEGER,
        references : {
          model : "orders",
          key : "id"
        }
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount : {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      productSize: {
        type : Sequelize.INTEGER,
        references : {
          model : "product_sizes",
          key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_Details');
  }
};