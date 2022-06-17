const  express  =require('express');
const registerUser = require('../controller/userDetails')

const router = express.Router();

//User Register 
router
   .route('/create_user')
   .post(registerUser)
   

module.exports = router; 