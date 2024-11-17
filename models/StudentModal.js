const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Student schema
const studentSchema = new Schema(
    {
        ApplicationID: { type: String, required: true },
        FullName: { type: String, required: true },
        NameWithInitials: { type: String },
        Address: { type: String },
        BDay: { type: Date },
        Gender: { type: String },
        VillageSecretariat: { type: String },
        DivisionalSecretariat: { type: String },
        Pnum: {
            Mobile: { type: String },
            Home: { type: String },
            Whatsapp: { type: String },
        },
        ALSubjects: {
            Stream: { type: String },
            Sub1: { type: String },
            Sub2: { type: String },
            Sub3: { type: String },
        },
        OLResults: {
            Mathematics: { type: String },
            Science: { type: String },
            Sinhala: { type: String },
            English: { type: String },
            Buddhism: { type: String },
            History: { type: String },
            SectionI: { type: String },
            SectionII: { type: String },
            SectionIII: { type: String },
        },
        IDNo: { type: String },
        NumOfBirthCertificate: { type: String },
        BrotherSisters: {
            FullName: { type: String },
            Class: { type: String },
        },
        Guardiance: {
            FullName: { type: String },
            Job: { type: String },
            Pnum: { type: String },
            IDNo: { type: String },
        },
        MethodToComeSchool: { type: String },
        income: { type: Number },
        skills: { type: String },
        Achievements: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
