const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('📩 Contact Form:', { name, email, message });
    res.json({ msg: 'Message received! We will contact you soon.' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;