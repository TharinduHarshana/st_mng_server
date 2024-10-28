const router = require('express').Router();
const {
    addStudent,
    getAllStudents,
    updateStudent,
    deleteStudent,
    getStudentCount
} = require('../controller/StudentController');

// Create a new student
router.post('/add', addStudent);

// Retrieve all students
router.get('/', getAllStudents);

// Update a student with id
router.patch('/:id', updateStudent);  

// Delete a student with id
router.delete('/:id', deleteStudent);  

// Get student count
router.get('/count', getStudentCount);

module.exports = router;
