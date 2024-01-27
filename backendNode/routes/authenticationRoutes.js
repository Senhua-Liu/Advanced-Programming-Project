const express = require('express');
const router = express.Router();
const Authentication = require('../models/authentication');

// GET all authentication records
router.get('/', async (req, res) => {
    try {
        const authRecords = await Authentication.findAll();
        res.json(authRecords);
    } catch (error) {
        console.error('Error fetching authentication records:', error);
        res.status(500).send('Error fetching authentication records');
    }
});

// POST a new authentication record
router.post('/', async (req, res) => {
    try {
        const newAuthRecord = await Authentication.create(req.body);
        res.status(201).json(newAuthRecord);
    } catch (error) {
        console.error('Error creating authentication record:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;
