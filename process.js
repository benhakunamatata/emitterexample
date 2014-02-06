process.on('uncaughtException', function(err){
  console.log('exception:' + err);
});

setTimeout(function(){
  console.log('will run');
}, 500);

setInterval(function(){
  console.log('interval');
},500);

nofunc();
console.log('not run');

