const express = require('express');
require('dotenv').config();
const app = express();

// Database
require('./db/db');

app.set('PORT', process.env.PORT || 5000);

app.use('/', (req, res) => {
    res.send('Hello World')
});

app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
})