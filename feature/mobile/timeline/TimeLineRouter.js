const router = require('express').Router();
const pontos = require('./TimeLineController');

router.post('/listacompras',pontos.listaCompras);
router.get('/listacartoes',pontos.listaCartoes);

module.exports = router;