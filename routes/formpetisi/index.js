const router = require('express').Router();
const formpetisiController = require('../../controllers/formpetisiController');

router.post('/', formpetisiController.postFormPetisi);
router.get('/', formpetisiController.getFormPetisi);
router.get('/:id', formpetisiController.getById);
router.put('/:id', formpetisiController.putFormPetisi);
router.delete('/:id', formpetisiController.deleteFormPetisi);

module.exports = router;