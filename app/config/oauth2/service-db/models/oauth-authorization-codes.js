'use strict';

module.exports = function (sequelize, DataTypes) {
  const OauthAuthorizationCodes = sequelize.define('OauthAuthorizationCodes', {
        clientIdx: {
          field: 'client_idx',
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: false
        },
        userIdx: {
          field: 'user_idx',
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull: false
        },
        authorizationCode: {
          field: 'authorization_code',
          type: DataTypes.CHAR(255),
          allowNull: false
        },
        expires: {
          field: 'expires',
          type: DataTypes.DATE
        },
        redirectUri: {
          field: 'redirect_uri',
          type: DataTypes.CHAR(255),
          allowNull: false
        },
        scope: {
          field: 'scope',
          type: DataTypes.CHAR(255),
          allowNull: false
        }
      },
      {
        tableName: 'oauth_authorization_codes',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
      });

  OauthAuthorizationCodes.associate = function associate(models) {
    OauthAuthorizationCodes.belongsTo(models.User, {
      foreignKey: 'userIdx',
      target: 'idx'
    });

    OauthAuthorizationCodes.belongsTo(models.OauthClients, {
      foreignKey: 'clientIdx',
      target: 'idx'
    });
  };

  return OauthAuthorizationCodes;
};