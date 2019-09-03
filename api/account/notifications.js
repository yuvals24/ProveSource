const Notifications = require('../../models/account/Notifications');
const express = require('express')
const router = express.Router()

//adds a notification to the database
router.post('/', async (req, res) => {
    const { accountId, name, color } = req.body;
    const notifications = new Notifications({ accountId, name, color });
    await notifications.save();
    return res.send({ message: 'success' });
})

module.exports = router