const mongoose = require('mongoose');
const Lead = require('./models/Lead');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const checkLeads = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const leads = await Lead.find().sort({ createdAt: -1 }).limit(5);
        console.log('--- LATEST LEADS ---');
        leads.forEach(l => console.log(`${l.name} (${l.phone}) - ${l.material}`));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

checkLeads();
