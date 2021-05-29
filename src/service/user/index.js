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
exports.findOne = (req, res) => {
  const file = this.readFile();
  const { user_id } = req.param;
  const index = file.findIndex(user => user.id == user_id)

  if (index != -1) {
    res.status(200).send(file[index]);
}
  else {
    res.status(404).send({ mensagemError: "Usuario não encontrado" });
  }
}

}
exports.update = () => {

}
exports.deleteOne = () => {

}
exports.deleteAll = () => {

}
