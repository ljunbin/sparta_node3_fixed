"use strict";
const { Model } = require("sequelize");
const dataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.belongsTo(/models,{foreignKey:"userId"});
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'userId',
      });
      this.hasMany(models.Comment, {
        foreignKey: 'postId',
        sourceKey: 'postId',
      });
    }
  }
  Post.init(
    {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
      },
      userId: {
        type: dataTypes.INTEGER,
        references: {
          model: "Users",
          key: "userId",
        },
      },
      nickname: {
        type: dataTypes.STRING,
      },
      title: {
        type: dataTypes.STRING,
      },
      likes: {
        type: dataTypes.STRING,
      },
      content: {
        type: dataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};