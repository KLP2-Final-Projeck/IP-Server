const router = require('express').Router();
const forumController = require('../../controllers/forumController');

router.get('/', forumController.getForum);
router.get('/:id', forumController.getById);
router.post('/', forumController.postForum);
router.delete('/:id', forumController.deleteForum);
router.put('/:id', forumController.putForum);

module.exports = router;