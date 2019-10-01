# node-https-response

A simple object to return http response object with required headers for AWS api gatway to enable the cors

[![Build Status](https://github.com/Pranay2111/node-https-response)](https://github.com/Pranay2111/node-https-response)
[![NPM version](https://img.shields.io/npm/v/http-response-object.svg)](https://www.npmjs.com/package/node-https-response)


## Installation

    npm install node-https-response

## Usage
//success method 
```js
var response = require('node-https-response');
var res = new response.success(200, 'Successfully submited' , 'This is my Data' , { header1 : 25, header2 :'Play'} );
//statusCode === 200 
//message === OK
//body === {}
//headers === {} , if headers are not passed , default headers will be passed to enable the cors for AWS API gateway .

//error method
var response = require('node-https-response');
var res = new response.error(404, 'Page Not found' );
//statusCode === 400
//message === 'Bad Request'
```

## Properties

 - `statusCode`: Number - the status code of the response
 - `body`: Object | String - object of statusCode, message, data as a parameter
 - `headers`: Object - the headers of the response.  The keys are automatically made lower case.

## License

  ISC
