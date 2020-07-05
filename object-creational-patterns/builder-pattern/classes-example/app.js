// const Signup = require('./Signup');

// Signup.create('Harsh', 'harsh@gmail', '99987687', 25, true, 'Single', 'Hindu', null);

const SignupBuilder = require('./SignupBuilder');

new SignupBuilder('Harsh', 'harsh@gmail', '99987687')
    .setAge(25)
    .setMaritalStatus('Single')
    .create();