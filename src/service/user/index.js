const fs = require('fs');
const path = './database/user.json'

exports.read = () => {
  const file = fs.readFileSync(path, 'utf-8');
  return JSON.parse(file);
}

exports.findAll = (req, res) => {
  const file = this.readFile();

  res.status(200).send(file);
}
exports.findOne = () => {

}
exports.create = () => {

}
exports.update = () => {

}
exports.deleteOne = () => {

}
exports.deleteAll = () => {

}
