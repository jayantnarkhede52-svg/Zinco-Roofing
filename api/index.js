const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load .env file (works locally; Vercel injects env vars automatically)
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (cached for serverless warm starts)
let dbPromise = null;
const connectDB = () => {
    if (!dbPromise) {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            console.error('❌ MONGODB_URI is not set');
            dbPromise = Promise.reject(new Error('MONGODB_URI environment variable is not configured'));
            return dbPromise;
        }
        dbPromise = mongoose.connect(uri)
            .then(() => console.log('✅ Connected to MongoDB'))
            .catch((err) => {
                console.error('❌ MongoDB Connection Error:', err.message);
                dbPromise = null; // Reset so it retries on next request
                throw err;
            });
    }
    return dbPromise;
};

// Ensure DB is connected before any route runs
app.use((req, res, next) => {
    connectDB()
        .then(() => next())
        .catch((err) => res.status(500).json({ msg: 'Database connection failed', error: err.message }));
});

// Health check
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/seo', require('./routes/seoRoutes'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

module.exports = app;
