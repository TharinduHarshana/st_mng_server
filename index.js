const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config(); 

// Importing environment variables
const app = express();
const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect(mongo_url, {});
const connection = mongoose.connection; 

connection.once("open", () => {
  console.log("Database Connection Successful");
});

// Importing routes
const studentRoutes = require('./routes/StudentRoutes');
const userRoutes = require('./routes/UserRouter');

app.use('/api/student', studentRoutes);
app.use('/api/user', userRoutes);

// Starting server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
