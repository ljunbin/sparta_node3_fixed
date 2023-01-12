"use strict";
const { Model } = require("sequelize");
const dataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "userId",
      });
      this.belongsTo(models.Post, {
        foreignKey: "postId",
        targetKey: "postId",
      });
    }
  }
  Like.init(
    {
      likeId: {
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      postId: {
        required: true,
        type: dataTypes.INTEGER,
      },
      userId: {
        required: true,
        type: dataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  return Like;
};