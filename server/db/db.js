const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const database = process.env.MONGO_DB;

const URI = `mongodb+srv://${user}:${password}@microforum.wuiju.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(db => console.log('connected to DB'))
.catch(err => console.log(err));

module.exports = mongoose;