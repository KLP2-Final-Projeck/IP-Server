const router = require('express').Router();
const totalData = require('../../controllers/totalController');

router.get('/total', totalData.getTotalData);

module.exports = router;