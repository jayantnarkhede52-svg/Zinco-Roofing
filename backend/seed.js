const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const uri = "mongodb+srv://infozincoroof_db_user:zinco1234@zinco-website.dqsvxc1.mongodb.net/?appName=Zinco-website";

// Admin Schema
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'Admin' }
});

AdminSchema.pre('save', async function() {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

const seed = async () => {
    try {
        console.log('Connecting to MongoDB Atlas...');
        await mongoose.connect(uri);
        console.log('✅ Connected');
        
        console.log('Cleaning existing admin...');
        await Admin.deleteMany({ username: 'admin' });
        
        console.log('Creating fresh admin user...');
        const admin = new Admin({
            username: 'admin',
            password: 'zincoadmin123'
        });
        await admin.save();
        console.log('✅ Admin successfully created!');
        console.log('Username: admin');
        console.log('Password: zincoadmin123');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error during seeding:', err);
        process.exit(1);
    }
};

seed();
