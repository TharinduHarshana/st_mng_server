const User = require('../models/UsersModal');

// Add a new user 
const add = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, message: 'User added successfully' });
    } catch (error) {
        res.status(400).json({ success: false, message: 'User could not be added' });
    }
};


// Get all users from the database
async function get() {
    try {
        const users = await User.find();
        console.log('Users retrieved successfully:', users);
        return users;
    } catch (error) {
        console.error('Error retrieving users:', error.message);
        throw new Error('Failed to retrieve users. Please try again later.');
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        console.log(user);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }
        res.json({
            success: true,
            message: 'Logged in successfully.',
            user: { username: user.username, role: user.role } // Include role in the response
        });

    } catch (error) {
        console.error('Error during user login:', error.message);
        res.status(500).json({ success: false, message: 'Failed to log in. Please try again later.' });
    }
};


// Update user by ID
async function update(userId, updatedUser) {
    try {
        const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });
        if (user) {
            console.log('User updated successfully:', user);
            return user;
        } else {
            console.warn('User not found for updating.');
            throw new Error('User not found.');
        }
    } catch (error) {
        console.error('Error updating user:', error.message);
        throw new Error('Failed to update user. Please try again later.');
    }
}

// get all users count 
async function getCount() {
    try {
        const count = await User.countDocuments();
        console.log('Users count retrieved successfully:', count);
        return count;
    } catch (error) {
        console.error('Error retrieving users count:', error.message);
        throw new Error('Failed to retrieve users count. Please try again later.');
    }
}

module.exports = {
    add,
    get,
    login,
    update,
    getCount
};
