const router = require('express').Router();
const commentController = require('../../controllers/commentController');

router.post('/', commentController.postComment);
router.get('/', commentController.getComment);
router.get('/:id', commentController.getById);
router.put('/:id', commentController.putComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;