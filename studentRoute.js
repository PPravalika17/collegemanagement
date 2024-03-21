const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  // Update logic
});

router.delete('/:id', async (req, res) => {
  // Delete logic
});

module.exports = router;
