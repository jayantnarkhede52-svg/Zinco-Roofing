const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    area: { type: Number },
    material: { type: String },
    estimatedPrice: { type: String },
    status: { 
        type: String, 
        enum: ['New', 'Contacted', 'Quoted', 'Completed', 'Rejected'],
        default: 'New'
    },
    message: { type: String },
    notes: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
