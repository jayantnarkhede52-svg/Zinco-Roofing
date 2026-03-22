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
        res.status(500).json({ msg: 'Server Error', error: err.message });
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
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// @route   GET api/leads/export
// @desc    Export leads to CSV (Protected)
// NOTE: This must come BEFORE /:id to avoid matching "export" as an id
router.get('/export', auth, async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        
        let csv = 'Date,Name,Email,Phone,Service,Area,Source,Status,Message\n';
        
        leads.forEach(lead => {
            const date = new Date(lead.createdAt).toLocaleDateString();
            const name = `"${itemEscape(lead.name)}"`;
            const email = `"${itemEscape(lead.email)}"`;
            const phone = `"${itemEscape(lead.phone)}"`;
            const service = `"${itemEscape(lead.serviceType || lead.material || '')}"`;
            const area = `"${itemEscape(lead.area || '')}"`;
            const source = `"${itemEscape(lead.source || '')}"`;
            const status = `"${itemEscape(lead.status)}"`;
            const message = `"${itemEscape(lead.message || '')}"`;
            
            csv += `${date},${name},${email},${phone},${service},${area},${source},${status},${message}\n`;
        });

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=leads_${new Date().toISOString().split('T')[0]}.csv`);
        res.send(csv);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
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
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

function itemEscape(text) {
    if (!text) return '';
    return text.toString().replace(/"/g, '""');
}

module.exports = router;
