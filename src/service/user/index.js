const fs = require('fs');
const path = './database/user.json'

exports.read = () => {
  const file = fs.readFileSync(path, 'utf-8');
  return JSON.parse(file);
}

exports.findAll = () => {

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
