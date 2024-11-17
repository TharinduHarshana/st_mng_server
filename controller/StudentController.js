const Student = require('../models/StudentModal');

// Preprocess incoming data to match schema
const preprocessStudentData = (data) => ({
    ...data,
    BDay: data.BDay ? new Date(data.BDay) : null, // Convert BDay to Date
    income: data.income ? parseFloat(data.income) : null, // Convert income to Number
    Pnum: {
        Mobile: data.Pnum?.Mobile || null,
        Home: data.Pnum?.Home || null,
        Whatsapp: data.Pnum?.Whatsapp || null,
    },
    ALSubjects: {
        Stream: data.ALSubjects?.Stream || null,
        Sub1: data.ALSubjects?.Sub1 || null,
        Sub2: data.ALSubjects?.Sub2 || null,
        Sub3: data.ALSubjects?.Sub3 || null,
    },
    OLResults: {
        Mathematics: data.OLResults?.Mathematics || null,
        Science: data.OLResults?.Science || null,
        Sinhala: data.OLResults?.Sinhala || null,
        English: data.OLResults?.English || null,
        Buddhism: data.OLResults?.Buddhism || null,
        History: data.OLResults?.History || null,
        SectionI: data.OLResults?.SectionI || null,
        SectionII: data.OLResults?.SectionII || null,
        SectionIII: data.OLResults?.SectionIII || null,
    },
    BrotherSisters: {
        FullName: data.BrotherSisters?.FullName || null,
        Class: data.BrotherSisters?.Class || null,
    },
});

// Create and Save a new Student
const addStudent = async (req, res) => {
    try {
        const studentData = preprocessStudentData(req.body);
        const student = new Student(studentData);
        await student.save();
        res.status(201).json({ success: true, message: 'Student added successfully', data: student });
    } catch (error) {
        console.error('Error adding student:', error.message);
        res.status(400).json({ success: false, message: 'Student could not be added', error: error.message });
    }
};

// Retrieve and return all students from the database
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ success: true, data: students });
    } catch (error) {
        console.error('Error retrieving students:', error.message);
        res.status(400).json({ success: false, message: 'Students could not be retrieved', error: error.message });
    }
};

// Update a student by ID
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = preprocessStudentData(req.body);
        const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedStudent) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student updated successfully', data: updatedStudent });
    } catch (error) {
        console.error('Error updating student:', error.message);
        res.status(400).json({ success: false, message: 'Student could not be updated', error: error.message });
    }
};

// Delete a student with the specified ID
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.status(200).json({ success: true, message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error.message);
        res.status(400).json({ success: false, message: 'Student could not be deleted', error: error.message });
    }
};

// Get Student Count
const getStudentCount = async (req, res) => {
    try {
        const count = await Student.countDocuments();
        res.status(200).json({ success: true, data: count });
    } catch (error) {
        console.error('Error retrieving student count:', error.message);
        res.status(400).json({ success: false, message: 'Student count could not be retrieved', error: error.message });
    }
};

module.exports = {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getStudentCount,
};
