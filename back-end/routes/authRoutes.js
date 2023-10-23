const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authController')

// middleware hai for CORS
//important
// Yessok

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000' //update with your Front-end URL
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)



module.exports = router