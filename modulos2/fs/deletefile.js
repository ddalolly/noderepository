var fs = require('fs');

fs.unlink('novoarquivo4.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});