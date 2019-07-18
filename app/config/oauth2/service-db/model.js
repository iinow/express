'use strict';

const model = module.exports;
const serviceDB = require('~/app/config/oauth2/service-db/index');

model.getAccessToken = (bearerToken) => {
  return serviceDB.getAccessToken(bearerToken);
};

model.getAuthorizationCode = (code) => {
  return serviceDB.getAuthorizationCode(code);
};

model.getClient = (clientId, clientSecret) => {
  return serviceDB.getClient(clientId, clientSecret);
};

model.getUser = (username, password) => {
  return serviceDB.getUser(username, password);
};

model.getRefreshToken = (refreshToken) => {
  return serviceDB.getRefreshToken(refreshToken);
};

model.saveToken = (token, client, user) => {
  return serviceDB.saveToken(token, client, user);
};

model.saveAuthorizationCode = (code, client, user) => {
  return serviceDB.saveAuthorizationCode(code, client, user)
};

model.revokeToken = (token) => {
  return serviceDB.revokeToken(token);
};

model.revokeAuthorizationCode = ({code}) => {
  return serviceDB.revokeAuthorizationCode(code);
};

let dd = new Date()
dd.getHours()
dd.getMonth