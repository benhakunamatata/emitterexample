var dns = require('dns');

dns.lookup('google.com',4, function(e,a){
  console.log(a);
});

dns.resolve('google.com','A', function(e,r){
  console.log(r);
});

dns.resolveMx('google.com',function(e,r){
  console.log(r);
});

