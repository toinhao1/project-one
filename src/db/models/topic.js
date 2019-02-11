'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define(
    'Topic',
    {
      description: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  Topic.associate = function(models) {
    // associations can be defined here
    Topic.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Topic;
};
