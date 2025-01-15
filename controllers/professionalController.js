const professionalData = require("../db/testData"); 

// Controller function to get professional data
const getProfessionalData = (req, res) => {
  res.json(professionalData);
};

module.exports = { getProfessionalData };
