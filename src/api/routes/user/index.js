const router = require('express').Router();
const { findAll, findOne, create, update, deleteAll, deleteOne } = require('../../../service/user');

router.get('/', findAll);
router.get('/:user_id', findOne);
router.post('/', create);
router.put('/:user_id', update);
router.delete('/:user_id', deleteOne);
router.delete('/', deleteAll);

module.exports = router