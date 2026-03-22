const mongoose = require('mongoose');

const SeoMetadataSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: {
        type: String
    },
    focusKeyword: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('SeoMetadata', SeoMetadataSchema);
