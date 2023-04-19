var fs = require('fs');

fs.appendFile('novoarquivo.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});