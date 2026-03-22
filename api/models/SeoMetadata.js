const mongoose = require('mongoose');

const seoMetadataSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    keywords: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('SeoMetadata', seoMetadataSchema);
