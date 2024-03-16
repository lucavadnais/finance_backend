require('dotenv').config();

const mongoose = require('mongoose');
const options = {
    dbName: process.env.MONGODB_DB_NAME
};

const users = require('./models/users_model');

mongoose.connect(process.env.MONGO_URI, options).then(r => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.error('Error connecting to MongoDB:', e);
    process.exit(1);
});

module.exports = {
    users,
}
