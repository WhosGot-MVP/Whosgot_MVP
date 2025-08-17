const express = require('express');
const router = express.Router();

// temporary in-memory data
let requests = [
  { id: 1, title: "Looking for Phil & Eddie’s Diner photo", tag: "Heartwarming" },
  { id: 2, title: "Need advice on moving to Berlin", tag: "Advice" }
];

// GET all
router.get('/', (req, res) => {
  res.json(requests);
});

// POST create
router.post('/', (req, res) => {
  const newRequest = { id: Date.now(), ...req.body };
  requests.push(newRequest);
  res.status(201).json(newRequest);
});

module.exports = router;
