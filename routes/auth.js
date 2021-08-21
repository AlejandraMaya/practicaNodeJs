/*
Rutas de usuarios 
host + api/auth
*/

const {Router} = require('express');
const router = Router();
const {crearUsuario, loginUsuario, revalidarToken}= require('../controllers/auth');


//rutas 
router.post('/new',crearUsuario);

router.post('/', loginUsuario);

 router.get('/renew', revalidarToken);


module.exports = router;