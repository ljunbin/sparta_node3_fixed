"use strict";
const { Model } = require("sequelize");
const dataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Posts,{
      //   as: "Posts",
      //   foreignKey:"userId",
      // });
      this.hasMany(models.Comment, {
        foreignKey: 'userId',
        sourceKey: 'userId',
      });
      this.hasMany(models.Post, {
        foreignKey: 'userId',
        sourceKey: 'userId',
      });
      this.hasMany(models.Like, {
        foreignKey: 'userId',
        sourceKey: 'userId',
      });
    }
  }
  User.init(
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:dataTypes.INTEGER
      },
      nickname: {
        allowNull: false,
        unique: true,
        type: dataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: dataTypes.STRING,
      },
      createdAt: {
        type: dataTypes.DATE,
      },
      updatedAt: {
        type: dataTypes.DATE,
      },
      refreshToken: {
        type: dataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};