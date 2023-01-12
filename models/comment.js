"use strict";
const { Model } = require("sequelize");
const dataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'userId',
      });
      this.belongsTo(models.Post, {
        foreignKey: 'postId',
        targetKey: 'postId',
      });
    }
  }
  Comment.init(
    {
      commentId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
      },
      postId: {
        type: dataTypes.INTEGER,
        required: true,
      },
      nickname: {
        type: dataTypes.STRING,
        required: true,
      },
      userId: {
        type: dataTypes.INTEGER,
        required: true,
      },
      content: {
        type: dataTypes.STRING,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};