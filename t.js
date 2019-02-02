const dashcore = require('@dashevo/dashcore-lib');
const dashcoreMessage = require('.');

let privateKey = dashcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
console.log("privateKey: " + privateKey);
console.log("typeof privateKey: " + typeof privateKey);

let signature = dashcoreMessage('hello, world').sign(privateKey);
console.log("signature: " + signature);
