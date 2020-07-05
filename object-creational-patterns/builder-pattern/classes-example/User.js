class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    setPreferences(age, isAdmin, maritalStatus, religion, profilePhoto) {
        this.age = age;
        this.isAdmin = isAdmin;
        this.maritalStatus = maritalStatus;
        this.religion = religion;
        this.profilePhoto = profilePhoto;
    }
}

 module.exports = User;