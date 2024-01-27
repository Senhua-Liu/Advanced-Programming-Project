// receiverRoutes

const express = require('express');
const router = express.Router();
const Receiver = require('../models/receiver');


// GET all Receiver
router.get('/', async (req, res) => {
    try {
        const receiver = await Receiver.findAll();
        res.json(receiver);
    } catch (error) {
        console.error('Error fetching Receiver:', error);
        res.status(500).send('Error fetching Receiver');
    }
});

// GET a single Receiver by id
router.get('/:id', async (req, res) => {
    try {
        const receiver = await Receiver.findByPk(req.params.id);
        if (receiver) {
            res.json(receiver);
        } else {
            res.status(404).send('Receiver not found');
        }
    } catch (error) {
        console.error('Error fetching Receiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Receiver
router.post('/', async (req, res) => {
    try {
        const newReceiver = await Receiver.create(req.body);
        res.status(201).json(newReceiver);
    } catch (error) {
        console.error('Error creating Receiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Receiver
router.put('/:id', async (req, res) => {
    try {
        const updatedReceiver = await Receiver.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedReceiver);
    } catch (error) {
        console.error('Error updating Receiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Receiver
router.delete('/:id', async (req, res) => {
    try {
        await Receiver.destroy({
            where: { id: req.params.id }
        });
        res.send('Receiver deleted successfully');
    } catch (error) {
        console.error('Error deleting Receiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
