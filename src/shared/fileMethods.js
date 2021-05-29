const fs = require('fs');

exports.readFile = (path) => {
  const file = fs.readFileSync(path, 'utf-8');
  return JSON.parse(file);
}
exports.writeFile = (path, file) => {
  fs.writeFile(path, JSON.stringify(file), 'utf-8', (error) => {
    return error;
  })
}