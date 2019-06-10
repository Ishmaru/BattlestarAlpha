const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set up DB
let dev_db_url = 'mongodb://StarOfficer:1LastStarfighter@ds149672.mlab.com:49672/battlestar_alpha';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//Routes
const score = require('./routes/routes');

//Set App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/scores', score);

var port = 9000;

app.listen(port, () => {
  console.log('server:' + port);
})
