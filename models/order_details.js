'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order, Product_Size}) {
      this.belongsTo(Order, {foreignKey : "order_ID"})
      this.belongsTo(Product_Size,{foreignKey :"productSize"})
    }
  }
  Order_Details.init({
    order_ID: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount : DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    productSize : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Details',
  });
  return Order_Details;
};