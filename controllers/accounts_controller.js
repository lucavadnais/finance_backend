const db = require('../db');
const {dbUser} = require("./users_controller");

class Accounts {
    static dbAccount = db.accounts;

    static async createAccount(account) {
        const userId = await dbUser.findOne({_id: account.user_id});
        const accountDetails = await Accounts.dbAccount.findOne({user_id: account.user_id, name: account.name, provider: account.provider, lastDigits: account.lastDigits});
        if (!userId) {
            throw new Error('This user does not exist');
        }
        if (accountDetails) {
            throw new Error('An account with the same details already exists');
        }
        const newAccount = await Accounts.dbAccount.create(account);
        return {newAccount};
    }

    static async getAllUserAccounts(userId) {
        return Accounts.dbAccount.find({user_id: userId}).select("-__v");
    }
}


module.exports = Accounts;
