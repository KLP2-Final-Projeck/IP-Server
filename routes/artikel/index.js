const router = require('express').Router();
const artikelController = require('../../controllers/artikelController')
const isAdmin = require('../../middlewares/isAdmin');
const authentication = require('../../middlewares/authentication')
const errorHandling = require('../../middlewares/errorHandling');

router.get('/', artikelController.getArtikel);
router.get('/:id', artikelController.getByID);
router.post('/', artikelController.postArtikel);
router.delete('/:id', artikelController.deleteArtikel);
router.put('/:id', artikelController.putArtikel);

router.use(errorHandling);

module.exports = router;