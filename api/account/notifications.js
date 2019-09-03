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

//returns the notifications for given accountId
router.get('/:accountId', (req, res) => {
    const accountId = req.params.accountId;
    Notifications.find({ accountId }, function (err, response) {
        if (response.length === 0) {
            return res.json({ "error": "account does not have notifications" })
        }
        else {
            return res.send(response)
        }
    })
})

//deletes notifications that contain color text and are only from specified account
router.delete('/:accountId/:color', (req, res) => {
    const accountId = req.params.accountId;
    const color = req.params.color;
    Notifications.find({ accountId, color }, function (err, response) {
        response.forEach(notifications => notifications.remove())
        return res.send({ message: 'success' })
    })
})

module.exports = router