var crypto = require('crypto');

var md5 = crypto.createHash('md5');
md5.update('foo');
md5.update('bar');

var d = md5.digest('hex');
console.log(d);

