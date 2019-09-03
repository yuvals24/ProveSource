const Account = require('../../models/account/Account');
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
	const { email, name, age } = req.body;
	Account.find({ email }, async function (err, response) {
		if (response.length > 0) {
			return res.json({ "error": "email already exists" })
		}
		else {
			const account = new Account({ email, name, age });
			await account.save();
			return res.send({ message: 'success' });
		}
	})
})


module.exports = router