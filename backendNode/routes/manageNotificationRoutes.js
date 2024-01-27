// manageNotificationRoutes


const express = require('express');
const router = express.Router();
const ManageNotification = require('../models/manageNotification');

// GET all ManageNotification
router.get('/', async (req, res) => {
    try {
        const manageNotification = await ManageNotification.findAll();
        res.json(manageNotification);
    } catch (error) {
        console.error('Error fetching ManageNotification:', error);
        res.status(500).send('Error fetching ManageNotification');
    }
});

// GET a single ManageNotification by id
router.get('/:id', async (req, res) => {
    try {
        const manageNotification = await ManageNotification.findByPk(req.params.id);
        if (manageNotification) {
            res.json(manageNotification);
        } else {
            res.status(404).send('ManageNotification not found');
        }
    } catch (error) {
        console.error('Error fetching ManageNotification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new ManageNotification
router.post('/', async (req, res) => {
    try {
        const newManageNotification = await ManageNotification.create(req.body);
        res.status(201).json(newManageNotification);
    } catch (error) {
        console.error('Error creating ManageNotification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a ManageNotification
router.put('/:id', async (req, res) => {
    try {
        const updatedManageNotification = await ManageNotification.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedManageNotification);
    } catch (error) {
        console.error('Error updating ManageNotification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a ManageNotification
router.delete('/:id', async (req, res) => {
    try {
        await ManageNotification.destroy({
            where: { id: req.params.id }
        });
        res.send('ManageNotification deleted successfully');
    } catch (error) {
        console.error('Error deleting ManageNotification:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
