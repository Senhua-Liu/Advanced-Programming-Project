// meetingRoutes

const express = require('express');
const router = express.Router();
const Meeting = require('../models/meeting');

// GET all Meeting
router.get('/', async (req, res) => {
    try {
        const meeting = await Meeting.findAll();
        res.json(meeting);
    } catch (error) {
        console.error('Error fetching Meeting:', error);
        res.status(500).send('Error fetching Meeting');
    }
});

// GET a single Meeting by id
router.get('/:id', async (req, res) => {
    try {
        const meeting = await Meeting.findByPk(req.params.id);
        if (meeting) {
            res.json(meeting);
        } else {
            res.status(404).send('Meeting not found');
        }
    } catch (error) {
        console.error('Error fetching Meeting:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Meeting
router.post('/', async (req, res) => {
    try {
        const newMeeting = await Meeting.create(req.body);
        res.status(201).json(newMeeting);
    } catch (error) {
        console.error('Error creating Meeting:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Meeting
router.put('/:id', async (req, res) => {
    try {
        const updatedMeeting = await Meeting.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedMeeting);
    } catch (error) {
        console.error('Error updating Meeting:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Meeting
router.delete('/:id', async (req, res) => {
    try {
        await Meeting.destroy({
            where: { id: req.params.id }
        });
        res.send('Meeting deleted successfully');
    } catch (error) {
        console.error('Error deleting Meeting:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
