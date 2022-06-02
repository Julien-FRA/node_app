const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

router.post('/', stuffCtrl.createThings);

router.get('/:id', stuffCtrl.getOneThings);

router.put('/:id', stuffCtrl.updateThings);

router.delete('/:id', stuffCtrl.deleteThings);

router.get('/', stuffCtrl.getAllThings);

module.exports = router;
