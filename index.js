const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const routes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const fileUpload = require('express-fileupload');

connectDB();
const app = express();

app.use(fileUpload({
    useTempFiles: true
}));
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Set up CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://university-frontend-rosy.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Include OPTIONS method
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(routes);
app.use(courseRoutes);

app.listen(process.env.PORT, () => console.log("Backend is running"));
