const express = require('express');
const router = express.Router();
const {registerUser, loginUser, verifyJWT, getInfo} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify', verifyJWT);
router.get('/getinfo', getInfo);
// router.post('/addcomment', loginUser);

module.exports = router