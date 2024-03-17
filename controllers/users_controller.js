const db = require('../db');
const bcrypt = require('bcryptjs');

class Users {
    static dbUser = db.users;

    static async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        const newUser = await Users.dbUser.create(user);
        return {newUser};
    }

    static async getById(userId) {
        return Users.dbUser.findById(userId).select("-__v -password");
    }
}

module.exports = Users;
