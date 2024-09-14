const mongoose = require('mongoose');

const accountsSchema = mongoose.Schema({
    user_id: { type: String, required: true },
    type: { type: String, required: true },
    currency: { type: String, required: true },
    provider: { type: String, required: true },
    name: { type: String, required: true },
    lastDigits: { type: Number, required: false },
    color: { type: String, required: false },
    createdAt: { type: Date, required: true },
});

const accounts_schema = mongoose.model('accounts', accountsSchema);

module.exports = accounts_schema;
