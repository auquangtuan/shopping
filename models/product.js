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
    static associate({Category, Galery, Tag, Size, Product_Size, Gender}) {
      this.belongsTo(Category, {foreignKey : "category_id"});
      this.hasMany(Galery, {foreignKey : "product_id"})
      this.belongsTo(Tag, {foreignKey : "tag_id"})
      this.belongsToMany(Size, {through :Product_Size, foreignKey : "product_ID" })
      this.belongsTo(Gender, {foreignKey: "gender_ID"})
      // this.hasMany(Product_Size, {foreignKey : "product_ID"})
    }
  }
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    category_id: DataTypes.INTEGER,
    tag_id : DataTypes.INTEGER,
    delete: DataTypes.BOOLEAN,
    gender_ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};