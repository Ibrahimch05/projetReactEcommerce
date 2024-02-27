const express = require('express');
const router = express.Router() 
const {Login,Register,Forgetpassword,Resetpassword,verificationEmail, showAllUser} = require('../controllers/auth') 

router.post('/login',Login);
router.post('/register',Register);
router.post('/forgetpassword',Forgetpassword);
router.post('/resetpassword/:token',Resetpassword);
router.get('/verifieremail/:token',verificationEmail);
router.get('/all',showAllUser);



module.exports = router;