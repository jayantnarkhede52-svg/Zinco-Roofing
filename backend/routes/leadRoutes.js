const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');

// @route   POST api/leads
// @desc    Submit a new lead (Public)
router.post('/', async (req, res) => {
    try {
        const newLead = new Lead(req.body);
        const lead = await newLead.save();
        res.json(lead);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/leads
// @desc    Get all leads (Protected)
router.get('/', auth, async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PATCH api/leads/:id
// @desc    Update lead status (Protected)
router.patch('/:id', auth, async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(lead);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
