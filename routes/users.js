const router = require('express').Router();
const { getUsers, getProfile } = require('../controllers/users.js');

router.get('/users', getUsers);

router.get('/users/:id', getProfile);

module.exports = router;
