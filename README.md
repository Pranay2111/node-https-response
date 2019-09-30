node-https-response
A simple object to return http response object with required headers for AWS api gatway to enable the cors

Build Status Dependency Status NPM version

Installation
npm install node-https-response
Usage
//success method 
var response = require('node-https-response');
var res = new response.success(200, 'Successfully submited' , 'This is my Data' , { header1 : 25, header2 :'Play'} );
//statusCode === 200 
//message === OK
//body === {}
//headers === {} , if headers are not passed , default headers will be passed to enable the cors for AWS API gateway .

//error method
var response = require('node-https-response');
var res = new response.(, 'Successfully submited' , 'This is my Data' , { header1 : 25, header2 :'Play'} );
//statusCode === 400
//message === 'Bad Request'

Properties
statusCode: Number - the status code of the response
body: object of statusCode, message, data 
headers: Object - the headers of the response. The keys are automatically made lower case and default to cors enabeling object .
License
ISC
