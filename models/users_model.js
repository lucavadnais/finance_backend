const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    language: { type: String, required: true },
    password: { type: String, required: true },
});

const users_schema = mongoose.model('users', usersSchema);

module.exports = users_schema;

