const fs = require('fs');
const path = "./src/database/user.json"
const { readFile, writeFile } = require('../../shared/readFile')



exports.findAll = (req, res) => {
  const file = readFile(path);
  if (file.length > 0)
    res.status(200).send(file);
  else {
    res.status(200).send({ mensagemError: "não há usuários cadastrados" });
  }
}
exports.findOne = (req, res) => {
  const file = readFile(path);
  const { user_id } = req.params;
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
  const file = readFile(path);
  const id = (file.length > 0) ? file[file.length - 1].id + 1 : 1;
  const finalFile = [...file, { email, senha, id }]
  const error = writeFile(path, finalFile);

  if (error) {
    res.status(400).send({ mensagemError: "Não foi possível criar usuário" });
  }
  else {
    res.status(202).send({ email, senha })
  }
}
exports.update = (req, res) => {
  const file = readFile(path);
  const { email, senha } = req.body;
  const { user_id } = req.params
  const index = file.findIndex(user => user.id == user_id)

  if (index != -1) {
    const { email: ant_email, senha: ant_senha } = file[index];
    file[index] = {
      email: (email) ? email : ant_email,
      senha: (senha) ? senha : ant_senha,
      id: file[index].id
    }

    const error = writeFile(path, file);
    if (error) {
      res.status(400).send({ mensagemError: "Não foi possível atualizar usuário" });
    }
    else {
      res.status(202).send({ email, senha })
    }
  }
  else {
    res.status(404).send({ mensagemError: "Não foi possível encontrar usuário" });
  }
}
exports.deleteOne = (req, res) => {
  const file = readFile(path);
  const { user_id } = req.params;
  const index = file.findIndex(user => user.id == user_id)
  if (index != -1) {
    const deletedUser = file.splice(index, 1);
    const error = writeFile(path, file);
    if (error) {
      res.status(400).send({ mensagemError: "Não foi possível deletar usuário" });
    }
    else {
      res.status(200).send(deletedUser);
    }
  }
  else {
    res.status(404).send({ mensagemError: "Usuario não encontrado" });
  }
}
exports.deleteAll = (req, res) => {
  const error = writeFile(path, []);
  if (error) {
    res.status(400).send({ mensagemError: "Não foi possível deletar usuários" });
  }
  else {
    res.status(200).send(readFile(path));
  }
}
