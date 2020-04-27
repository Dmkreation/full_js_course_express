const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.index);

router.get('/:id', usersController.show);

router.post('/', usersController.create);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.destroy);

module.exports = router;
