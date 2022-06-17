const mongoose  = require('mongoose');
const {Schema } = mongoose;

const userSchema = Schema({
    name :{
        type : String,
        required :true 
    },
    email :{
        type : String,
        required :true,

    },
    phoneNumber :{
        type : String,
        required : false 
    },
    gender :{
        type : String,
        required :false,
    },
    photo : {
        type : String,
        required : false,
    },
    bio : {
        type : String,
        required : false,
    }
}, {
    timestamps : true
});


const  User  = mongoose.model('User' , userSchema);
module.exports = User;