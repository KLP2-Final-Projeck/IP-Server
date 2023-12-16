const router  = require('express').Router();
const artikelRoutes = require('./artikel/index')
const commentRoutes = require('./comment/index');
const infografisRoutes = require('./infografis/index')
const forumRoutes = require('./forum/index');
const petisiRoutes = require('./petisi/index');
const formPetisiRoutes = require('./formpetisi/index');
const donasiRoutes = require('./donasi/index');
const userRouter = require('./user/index');

router.use('/artikel', artikelRoutes);   
router.use('/comment', commentRoutes);   
router.use('/infografis', infografisRoutes);
router.use('/forum', forumRoutes);
router.use('/petisi', petisiRoutes);
router.use('/formpetisi', formPetisiRoutes);
router.use('/donasi', donasiRoutes);
router.use('', userRouter);

module.exports = router;