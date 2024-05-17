const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  resourceType: { type: String, default: "Patient" },
  id: String,
  name: [{ given: [String], family: String }],
  gender: String,
  birthDate: String
});

module.exports = mongoose.model('Patient', patientSchema);
