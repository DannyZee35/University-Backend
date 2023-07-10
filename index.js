const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const fileUpload = require('express-fileupload')
connectDB();
const cors = require('cors');
const app = express();
const cors = require('cors');

 
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))
<<<<<<< HEAD
 
app.use(cors());
=======

>>>>>>> 3db197a7696bed2b606a7312900ed33386e04d1f

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
 
app.use(routes);
app.use(courseRoutes);

app.listen(
    process.env.PORT,
    () => console.log("Backend is running")
)
