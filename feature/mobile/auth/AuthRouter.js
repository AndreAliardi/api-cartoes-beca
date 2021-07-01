const router = require('express').Router();
const login = require('./AuthController');

router.post('/login',login.loginSistema);

module.exports = router;