'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: 'must be a valid email' }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Topic, {
      foreignKey: 'userId',
      as: 'topics'
    });
  };
  return User;
};
