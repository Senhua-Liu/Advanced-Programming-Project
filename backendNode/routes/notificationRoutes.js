// notificationRoutes


const express = require('express');
const router = express.Router();
const Notification = require('../models/notification');

// GET all Notification
router.get('/', async (req, res) => {
    try {
        const notification = await Notification.findAll();
        res.json(notification);
    } catch (error) {
        console.error('Error fetching Notification:', error);
        res.status(500).send('Error fetching Notification');
    }
});

// GET a single Notification by id
router.get('/:id', async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params.id);
        if (notification) {
            res.json(notification);
        } else {
            res.status(404).send('Notification not found');
        }
    } catch (error) {
        console.error('Error fetching Notification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Notification
router.post('/', async (req, res) => {
    try {
        const newNotification = await Notification.create(req.body);
        res.status(201).json(newNotification);
    } catch (error) {
        console.error('Error creating Notification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Notification
router.put('/:id', async (req, res) => {
    try {
        const updatedNotification = await Notification.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedNotification);
    } catch (error) {
        console.error('Error updating Notification:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Notification
router.delete('/:id', async (req, res) => {
    try {
        await Notification.destroy({
            where: { id: req.params.id }
        });
        res.send('Notification deleted successfully');
    } catch (error) {
        console.error('Error deleting Notification:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
