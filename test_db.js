const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'backend', '.env') });

console.log('URI:', process.env.MONGODB_URI ? 'FOUND' : 'MISSING');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ Connected!');
        process.exit();
    })
    .catch(err => {
        console.error('❌ Error:', err.message);
        process.exit(1);
    });
