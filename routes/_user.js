const express = require('express');
const { Router } = express;
const router = Router();
const Users = require('../controllers/users_controller');

router.post('/', async function (req, res, next)  {
  try {
    res.send(await Users.createUser(req.body));
  } catch (error) {
    console.error('Error handling user creation:', error);
    return next(error);
  }
});

module.exports = router;
