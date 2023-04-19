var fs = require('fs');

fs.rename('novoarquivo.txt', 'arquivorenamed.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});