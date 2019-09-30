'use strict';
/**
 * Declare HTTP Status Code With Message
*/

const statusCodes = {
  200: 'OK',
  201: 'Created',
  204: 'No Content',
  206: 'Partial Update',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  408: 'Request Timeout',
  411: 'Length Required',
  413: 'Request Entity Too Large',
  414: 'Request - URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout'
}

exports = module.exports = statusCodes ;