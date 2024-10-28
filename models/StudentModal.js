const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Student schema

let studentSchema = new Schema({
    ApplicationID: {
        type: String
    },
    FullName: {
        type: String
    },
    NameWithInitials: {
        type: String
    },
    BDay: {
        type: String
    },
    IDNo: {
        type: String
    },
    TenNumber: {
        type: String
    },
    NameOfTheGuardian: {
        type: String
    },
    Address: {
        type: String
    },
    income: {
        type: String
    },
    skills:{
        type: String
    },
    Achievements: {
        type: String
    },
    School: {
        type: String
    }
});

module.exports = mongoose.model('Student', studentSchema);