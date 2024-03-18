const express = require('express');
const { Router } = express;
const router = Router();
const Users = require('../controllers/users_controller');

/* login */
router.post('/', async function (req, res, next)  {
    try {
        const { email, password } = req.body;
        res.send(await Users.login(email, password ));
    } catch (error) {
        console.error('Error handling user creation:', error);
        return next(error);
    }
});

module.exports = router;
