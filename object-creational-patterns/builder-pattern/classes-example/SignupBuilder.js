const Signup = require('./Signup');

class SignupBuilder {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
        return this;
    }

    setMaritalStatus(maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }

    setReligion(religion) {
        this.religion = religion;
        return this;
    }

    setProfilePhoto(profilePhoto) {
        this.profilePhoto = profilePhoto;
        return this;
    }

    create() {
        Signup.create(this);
    }
}

module.exports = SignupBuilder;