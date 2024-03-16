const db = require('../db');


class Users {
    static dbUser = db.users;

    static async createUser(user) {
        const newUser = await Users.dbUser.create(user);
        return {newUser};
    }
}

module.exports = Users;
