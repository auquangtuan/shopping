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
      product_ID: {
        type: Sequelize.INTEGER,
        references : {
          model : "products",
          key : "id"
        }
      },
      price: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER,
        references : {
          model : "statuses",
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