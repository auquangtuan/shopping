'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Size}) {
      this.belongsTo(Product, {foreignKey : "product_ID"})
      this.belongsTo(Size, {foreignKey : "size_ID"})
    }
  }
  Product_Size.init({
    product_ID: DataTypes.INTEGER,
    size_ID: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_Size',
  });
  return Product_Size;
};