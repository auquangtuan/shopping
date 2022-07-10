'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Role, Order}) {
      this.belongsTo(Role, {foreignKey : "role_id"})
      this.hasMany(Order,{foreignKey : "user_ID"})
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};