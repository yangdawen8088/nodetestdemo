'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * 用于定义关联的辅助方法。 
     * 此方法不是Sequelize生命周期的一部分。 
     * `models / index`文件将自动调用此方法。
     */
    static associate(models) {
      // 在这里定义关联 
    }
  };
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};