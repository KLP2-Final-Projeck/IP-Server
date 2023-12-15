const router = require('express').Router();
const artikelController = require('../../controllers/artikelController')

router.get('/', artikelController.getArtikel);
router.get('/:id', artikelController.getByID);
router.post('/', artikelController.postArtikel);
router.delete('/:id', artikelController.deleteArtikel);
router.put('/:id', artikelController.putArtikel);

module.exports = router;