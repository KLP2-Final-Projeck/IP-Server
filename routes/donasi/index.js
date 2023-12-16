const router = require('express').Router();
const donasiController = require('../../controllers/donasiController')

router.post('/', donasiController.postDonasi);
router.get('/', donasiController.getDonasi);
router.get('/:id', donasiController.getById);
router.delete('/:id', donasiController.deleteDonasi);
router.put('/:id', donasiController.putDonasi);

module.exports = router;