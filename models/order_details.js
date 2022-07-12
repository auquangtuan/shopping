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
    static associate({Product, Order, Status}) {
      this.belongsTo(Product, {foreignKey: "product_ID"})
      this.belongsTo(Order, {foreignKey : "order_ID"})
      this.belongsTo(Status,{foreignKey :"status"})
    }
  }
  Order_Details.init({
    order_ID: DataTypes.INTEGER,
    product_ID: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Details',
  });
  return Order_Details;
};