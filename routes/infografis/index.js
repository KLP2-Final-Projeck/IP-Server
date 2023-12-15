const router = require('express').Router();
const infografisController = require('../../controllers/infografisController');

router.get('/', infografisController.getInfografis);
router.get('/:id', infografisController.getByID);
router.post('', infografisController.postInfografis);
router.put('/:id', infografisController.putInfografis);
router.delete('/:id', infografisController.deleteInfografis);

module.exports = router;