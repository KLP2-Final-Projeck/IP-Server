const router = require('express').Router();
const userController = require('../../controllers/userController');

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);
router.get('/user', userController.getUser);
router.get('/user/:id', userController.getByID);
router.patch('/user/:id', userController.putUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;