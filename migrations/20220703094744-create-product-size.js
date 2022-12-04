'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_Sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_ID: {
        type: Sequelize.INTEGER,
        references : {
          model  : "Products",
          key : "id"
        }
      },
      size_ID : {
        type : Sequelize.INTEGER,
        references : {
          model : "Sizes",
          key : "id"
        }
      },
      amount : {
        type : Sequelize.INTEGER
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
    await queryInterface.dropTable('Product_Sizes');
  }
};