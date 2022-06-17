const User = require('../Models/userModel');



// @desc : Add new Users
// @route : POST api/users
// @access : Public
const registerUser = (req, res) => {
    const user = new User(req.body);
    console.log(user);
    user.save((err, user) => {
        if(err){
            throw err;
        }else{
            res.send(user);
        }
    });

  };

  module.exports = registerUser;