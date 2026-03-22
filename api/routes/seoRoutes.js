const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SeoMetadata = require('../models/SeoMetadata');

// @route   GET /api/seo
// @desc    Get all SEO metadata
// @access  Public
router.get('/', async (req, res) => {
    try {
        const seoData = await SeoMetadata.find();
        res.json(seoData);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// @route   GET /api/seo/:route
// @desc    Get SEO metadata for a specific route
// @access  Public
router.get('/*route', async (req, res) => {
    try {
        const routePath = '/' + req.params.route;
        const seoData = await SeoMetadata.findOne({ route: routePath });
        
        if (!seoData) {
            return res.status(404).json({ msg: 'SEO data not found for this route' });
        }
        
        res.json(seoData);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// @route   POST /api/seo
// @desc    Create or update SEO metadata for a route
// @access  Private
router.post('/', auth, async (req, res) => {
    const { route, title, description, keywords, focusKeyword } = req.body;

    try {
        let seoData = await SeoMetadata.findOne({ route });

        if (seoData) {
            // Update
            seoData.title = title;
            seoData.description = description;
            seoData.keywords = keywords;
            seoData.focusKeyword = focusKeyword;
            
            await seoData.save();
            return res.json(seoData);
        }

        // Create
        seoData = new SeoMetadata({
            route,
            title,
            description,
            keywords,
            focusKeyword
        });

        await seoData.save();
        res.json(seoData);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// @route   DELETE /api/seo/:id
// @desc    Delete SEO metadata
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const seoData = await SeoMetadata.findById(req.params.id);

        if (!seoData) {
            return res.status(404).json({ msg: 'SEO data not found' });
        }

        await seoData.deleteOne();
        res.json({ msg: 'SEO data removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

// @route   POST /api/seo/publish
// @desc    Trigger Vercel build
// @access  Private
router.post('/publish', auth, async (req, res) => {
    const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK;

    if (!deployHookUrl) {
        return res.status(400).json({ msg: 'Vercel Deploy Hook is not configured on the server. Please add VERCEL_DEPLOY_HOOK to your environment variables.' });
    }

    try {
        const response = await fetch(deployHookUrl, { method: 'POST' });
        
        if (response.ok) {
            res.json({ msg: 'Deployment triggered successfully!' });
        } else {
            res.status(500).json({ msg: 'Failed to trigger Vercel deployment.' });
        }
    } catch (err) {
        console.error('Publish webhook error:', err.message);
        res.status(500).json({ msg: 'Server Error', error: err.message });
    }
});

module.exports = router;
