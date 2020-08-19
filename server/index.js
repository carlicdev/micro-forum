const express = require('express');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const app = express();

// Database
require('./db/db');

// Routes
const postRouter = require('./routes/posts');

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// serve react static files
app.use(express.static(path.join(__dirname, './client/build')));

// Sessions

// Passport

// Api
app.use('/forum', postRouter);

app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
})