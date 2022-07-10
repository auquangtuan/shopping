'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category, Galery, Order_Details, Order, Tag}) {
      this.belongsTo(Category, {foreignKey : "category_id"});
      this.hasMany(Galery, {foreignKey : "product_id"})
      this.belongsToMany(Order, {through :Order_Details , foreignKey : "product_ID" })
      this.belongsTo(Tag, {foreignKey : "tag_id"})
    }
  }
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    category_id: DataTypes.INTEGER,
    tag_id : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};