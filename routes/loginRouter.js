const express = require('express');
const { login, postLogin, dashboard, logout } = require('../controllers/loginController');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();



router.get('/',login);
router.post('/',postLogin);

router.get('/dashboard',isAuthenticated,dashboard);
router.get('/logout',isAuthenticated,logout);




module.exports = router;