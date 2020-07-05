const User = require('./User');

class Signup {
    create({name, email, phone, age, isAdmin, maritalStatus, religion, profilePhoto}) {
        const newUser = new User(name, email, phone);
        newUser.setPreferences(age, isAdmin, maritalStatus, religion, profilePhoto);
        console.log(newUser);
    }
}

module.exports = new Signup();