const express = require('express');
const { Router } = express;
const router = Router();
const Accounts = require('../controllers/accounts_controller');

/* Create a new account */
router.post('/new', async function (req, res, next)  {
  try {
    res.send(await Accounts.createAccount(req.body));
  } catch (error) {
    console.error('Error handling the account creation:', error);
    return next(error);
  }
});



/* Get account all user account */
router.get('/user/:userId', async function (req, res, next) {
  try {
    res.send(await Accounts.getAllUserAccounts(req.params.userId));
  } catch (error) {
    console.log(error);
    return next(error);
  }
});


module.exports = router;
