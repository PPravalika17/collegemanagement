const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes.js');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/collegeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
