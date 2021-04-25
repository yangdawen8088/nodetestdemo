'use strict';

const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
    }
  };
  Todo.init({
    name: DataTypes.STRING,
    deadline: DataTypes.DATE,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};
// module.exports = (sequelize, DataTypes) => {
//   const Todo = sequelize.define('Todo', {
//     name: DataTypes.STRING,
//     deadline: DataTypes.DATE,
//     content: DataTypes.STRING
//   }, {
//     TimeRanges: false
//   });
//   Todo.associate = function (models) {

//   };
//   return Todo;
// }