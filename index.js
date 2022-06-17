const express = require('express');
const connectDB = require('./config/Db.js');
const dotenv = require('dotenv');
const app = express();



// Inbuilt middleware to parse data from body of request
app.use(express.json());


//Require routes
const userDetailsRoutes =  require('./routes/userRoutes'); 


// Db connection
connectDB();

dotenv.config();


//Routes 
app.use('/api/users', userDetailsRoutes);



app.get('/', (req, res) => {
    res.json({success : true, message : "Welcome to backend" })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT , () =>{
    console.log(`Server running on port ${PORT} .... `);
})