const Student = require('../models/StudentModal');

// Create and Save a new Student
const addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json({success: true, message: 'Student added successfully'});
    } catch (error) {
        res.status(400).json({success: false, message: 'Student could not be added'});
    }
};

// Retrieve and return all students from the database
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({success: true, data: students});
    } catch (error) {
        res.status(400).json({success: false, message: 'Students could not be retrieved'});
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;  // Use `id` instead of `_id`
        console.log('Updating student with id:', id);
        
        const updatedData = {
            ...req.body,
            updatedAt: Date.now()
        };
        console.log('Updating with data:', updatedData);
        
        const updatedStudent = await Student.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedStudent) {
            console.log('Student not found in database.');
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        console.log('Student updated successfully:', updatedStudent);
        res.status(200).json({ success: true, message: 'Student updated successfully', data: updatedStudent });
    } catch (error) {
        console.error('Error updating student:', error.message);
        res.status(400).json({ success: false, message: 'Student could not be updated' });
    }
};

// Delete a student with the specified studentId in the request
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            res.status(404).json({ success: false, message: 'Student not found' });
        } else {
            res.status(200).json({ success: true, message: 'Student deleted successfully' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: 'Student could not be deleted' });
    }
};

//get Student Count
const getStudentCount = async (req, res) => {
    try {
        const count = await Student.countDocuments();
        res.status(200).json({ success: true, data: count });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Student count could not be retrieved' });
    }
};

module.exports = {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getStudentCount
};
