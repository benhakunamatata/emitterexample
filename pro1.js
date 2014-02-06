process.stdin.resume();

process.on('SIGINT', function(){
  console.log('signit');
});

