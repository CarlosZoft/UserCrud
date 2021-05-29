const fs = require('fs');
const path = "./src/database/user.json"

exports.readFile = () => {
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
exports.create = (req, res) => {
  const { email, senha } = req.body;
  const file = this.readFile();
  const id = (file.length > 0) ? file[file.length - 1].id + 1 : 1;

  const finalFile = [...file, { email, senha, id }]

  fs.writeFile(path, JSON.stringify(finalFile), 'utf-8', (error) => {
    if (error) {
      res.status(400).send({ mensagemError: "Não foi possível criar usuário" });
    }
    else {
      res.status(202).send({ email, senha })
    }
  })

}
exports.update = (req, res) => {
  const file = this.readFile();
  const { email, senha } = req.body;
  const { user_id } = req.param;
  const index = file.findIndex(user => user.id == user_id)

  if (index != -1) {
    const { email: ant_email, senha: ant_senha } = file[index];
    const finalFile = [
      ...file,
      {
        email: email ? email : ant_email,
        senha: senha ? senha : ant_senha,
        id: file[index].id
      }
    ]

    fs.writeFile(path, JSON.stringify(finalFile), 'utf-8', (error) => {
      if (error) {
        res.status(400).send({ mensagemError: "Não foi possível criar usuário" });
      }
      else {
        res.status(202).send({ email, senha })
      }
    })
  }
  else {
    res.status(404).send({ mensagemError: "Não foi possível encontrar usuário" });
  }
}
exports.deleteOne = (req, res) => {

}
exports.deleteAll = (req, res) => {

}
