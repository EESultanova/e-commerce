require('dotenv').config()
const Router = require('express');
const router = new Router();
const checkAuth = require('../middleware/checkAuth');
const { uploadAvatar, deleteAvatar } = require('../controllers/fileController');

router.post('/avatar', checkAuth, uploadAvatar);
router.delete('/avatar', checkAuth, deleteAvatar);

module.exports = router;