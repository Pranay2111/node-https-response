const response = require('../src/format');

//   Sample code to check conditions .

var assetIdCreation = function (uniqueId) {
  if (uniqueId === 'abcd') {
    return response.success(200, 'Successfully submited', 'This is my Data', { header1:25, header2:'Play'});
  } else if (uniqueId === 'efgh') {
    return response.success(201, 'Succesfully registred', 'This is data', {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    });
  } else {
    return response.error();
  }
}

console.log(assetIdCreation('abd'));
