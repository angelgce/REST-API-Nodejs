const { Router } = require('express'); //importo Router, con esto puedo usar los get
const Controllers = require('../controllers/users'); //importo los controllers

const router = Router();
const controllers = new Controllers();

router.get('/', controllers.usersGet);
router.put('/:id/:username', controllers.usersPut);
router.post('/', controllers.usersPost);
router.delete('/', controllers.usersDelete);

module.exports = router;