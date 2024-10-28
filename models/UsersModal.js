const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User schema
let UserSchema = new Schema({
    username: {
        type: String,
        required: true // Ensure the username is provided
    },
    password: {
        type: String,
        required: true // Ensure the password is provided
    },
    role: {
        type: String,
        required: true // Ensure the role is provided
    }
});

module.exports = mongoose.model('SystemUser', UserSchema);
