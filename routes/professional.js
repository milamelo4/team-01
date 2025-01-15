const express = require("express");
const router = express.Router();
const {
  getProfessionalData,
} = require("../controllers/professionalController"); // Import the controller

router.get("/professional", getProfessionalData); // Use the controller function

module.exports = router;
