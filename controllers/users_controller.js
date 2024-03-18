const db = require('../db');
const bcrypt = require('bcryptjs');

class Users {
    static dbUser = db.users;

    static async createUser(user) {
        const email_address = await Users.dbUser.findOne({email: user.email});
        if (email_address) {
            throw new Error('An account with this email already exists');
        }
        user.password = await bcrypt.hash(user.password, 10);
        const newUser = await Users.dbUser.create(user);
        return {newUser};
    }

    static async getById(userId) {
        return Users.dbUser.findById(userId).select("-__v -password");
    }


    static async login(email, password) {
        const user = await Users.dbUser.findOne({email: email});
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid password');
        }
        return user;
    }
}

module.exports = Users;
