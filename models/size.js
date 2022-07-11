'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Product_Size}) {
      this.belongsToMany(Product, {through :Product_Size, foreignKey : "size_ID" })
    }
  }
  Size.init({
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};