var fs = require('fs');


var fileName = process.argv.slice(2, 3);

fs.readFile(fileName[0], function (err, data){
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});