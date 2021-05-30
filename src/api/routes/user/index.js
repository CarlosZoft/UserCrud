const router = require('express').Router();
const { findAll, findOne, create, update, deleteAll, deleteOne } = require('../../../service/user');
const { Validator } = require('../../../validation/user');

router.get('/', findAll);
router.get('/:user_id', findOne);
router.post('/', Validator, create);
router.put('/:user_id', Validator, update);
router.delete('/:user_id', deleteOne);
router.delete('/', deleteAll);

module.exports = router