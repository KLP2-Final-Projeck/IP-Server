const router = require('express').Router();
const petisiController = require('../../controllers/petisiController');

router.post('/', petisiController.postPetisi);
router.get('/', petisiController.getPetisi);
router.get('/:id', petisiController.getById);
router.put('/:id', petisiController.putPetisi);
router.delete('/:id', petisiController.deletedPetisi);

module.exports = router;