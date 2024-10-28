const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); 

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Function to connect to MongoDB and load models
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log("Database Connection Successful");

        // Load models (add your models here)
        require('./models/StudentModal');
        require('./models/StudentModal');
        console.log('Models loaded successfully.');
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
};

// Initial MongoDB connection
connectToMongoDB();

// Basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes (import your routes as necessary)
const studentRoutes = require('./routes/StudentRoutes');
const userRoutes = require('./routes/UserRouter');

app.use('/api/student', studentRoutes);
app.use('/api/user', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
