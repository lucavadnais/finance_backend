const express = require('express');
const { Router } = express;
const router = Router();
const Users = require('../controllers/users_controller');

/* Create a new user */
router.post('/', async function (req, res, next)  {
  try {
    res.send(await Users.createUser(req.body));
  } catch (error) {
    console.error('Error handling user creation:', error);
    return next(error);
  }
});

/* Get user by id */
router.get('/:userId', async function (req, res, next) {
  try {
    res.send(await Users.getById(req.params.userId));
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

module.exports = router;
