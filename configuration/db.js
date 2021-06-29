const config = require('config.json');
const mongoose = require('mongoose');
const connection_options = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.dbconnection, connection_options);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/model')
};