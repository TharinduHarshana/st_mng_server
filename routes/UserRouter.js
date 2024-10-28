const router = require('express').Router();
const {
    add,
    get,
    login,
    update,
    getCount
} = require('../controller/UserController');

// Get all users count
router.get('/count', getCount);

// Add a new user
router.post('/add', add);

// Get all users
router.get('/:', get);

// User login
router.post('/login', login);

// Update user by ID
router.patch('/:id', update);



module.exports = router;
