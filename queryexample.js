var qs = require('querystring');
var obj = qs.parse('a=1&b=2&c=d');
console.log(obj);

var myobj = {"a":1, "b":5, "c": "cat", "func": function(){ console.log("hi"); } };
var s = qs.encode(myobj);
console.log(s);
s = qs.stringify(myobj);
console.log(s);


