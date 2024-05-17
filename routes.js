const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Get all patients
router.get('/patients', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Post a new patient
router.post('/patients', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.status(201).json(newPatient);
});

module.exports = router;
