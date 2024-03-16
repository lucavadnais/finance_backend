const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
});

const users_schema = mongoose.model('users', usersSchema);

module.exports = users_schema;

