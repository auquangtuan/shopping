'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT('long')
      },
      category_id: {
        type: Sequelize.INTEGER,
        references : {
          model : "categories",
          key : "id"
        }
      },
      tag_id : {
        type: Sequelize.INTEGER,
        references : {
          model : "tags",
          key : "id"
        }
      },
      size : {
        type: Sequelize.INTEGER
      },
      gender_ID : {
        type : Sequelize.INTEGER,
        references : {
          model : "genders",
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
    await queryInterface.dropTable('Products');
  }
};