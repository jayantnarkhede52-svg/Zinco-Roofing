const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

console.log('1. Loading config...');
dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log('2. URI present:', !!process.env.MONGODB_URI);

const Admin = require('./models/Admin');
console.log('3. Admin model loaded');

const seedAdmin = async () => {
    try {
        console.log('4. Connecting to:', process.env.MONGODB_URI.substring(0, 20) + '...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ 5. Connected to MongoDB');
        
        console.log('6. Finding existing admin...');
        const existingAdmin = await Admin.findOne({ username: 'admin' });
        if (existingAdmin) {
            console.log('7. Admin already exists');
            process.exit();
        }

        console.log('8. Creating new admin...');
        const admin = new Admin({
            username: 'admin',
            password: 'zincoadmin123'
        });

        await admin.save();
        console.log('✅ 9. Admin user created successfully');
        process.exit();
    } catch (err) {
        console.error('❌ Error during seeding:', err);
        process.exit(1);
    }
};

seedAdmin();
