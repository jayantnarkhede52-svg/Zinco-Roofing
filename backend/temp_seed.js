const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const uri = "mongodb+srv://infozincoroof_db_user:zinco1234@zinco-website.dqsvxc1.mongodb.net/?appName=Zinco-website";

const seed = async () => {
    try {
        console.log('Connecting...');
        await mongoose.connect(uri);
        console.log('✅ Connected');
        
        const existing = await Admin.findOne({ username: 'admin' });
        if (existing) {
            console.log('Admin already exists');
        } else {
            const admin = new Admin({
                username: 'admin',
                password: 'zincoadmin123'
            });
            await admin.save();
            console.log('✅ Admin created');
        }
        process.exit();
    } catch (err) {
        console.error('❌ Error:', err);
        process.exit(1);
    }
};

seed();
