'use strict';
const statusCodesFile = require('./statusCodes');

//  Checks status code exists and set message accordingly.

const checkStatusCode = (statusCode, message) => { 
  if (statusCodesFile.hasOwnProperty(statusCode)) {
    return message || statusCodesFile[statusCode]
  }
}

module.exports = checkStatusCode ;

