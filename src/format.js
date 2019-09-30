const checkStatusCode = require('./helper');

//  Response format and methods called by index file

const format = {
  Response (statusCode, message, data, headers) {
    if (!statusCode) throw new Error('Status code is required');
    if (isNaN(Number(statusCode))) throw new Error('Status code not a number');       
    const headersToLowerCase = {}
    if (headers) {
      if (headers.hasOwnProperty('Access-Control-Allow-Origin') && headers.hasOwnProperty("Access-Control-Allow-Credentials")) {
        for (var key in headers) {
          headersToLowerCase[key.toLowerCase()] = headers[key];
        }
      }else {
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Credentials'] = true
      }   
    }    
    message = checkStatusCode(statusCode, message);
    const body = {
      statusCode,
      message,
      data
    }
    return {
      statusCode: statusCode,
      body: body ? JSON.stringify(body) : null,
      headers: headers || null
    }
  },  
  success (statusCode = 200, message, data, headers) {
    return this.Response(statusCode, message, data, headers);
  },
  error (statusCode = 400, message) {
    return this.Response(statusCode, message);
  }
}

module.exports = format ;
