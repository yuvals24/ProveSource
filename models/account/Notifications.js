const mongoose = require('mongoose');

const Notifications = new mongoose.Schema({
    accountId: { type: Number },
    name: { type: String },
    color: { type: String },
});

module.exports = mongoose.model('Notifications', Notifications);