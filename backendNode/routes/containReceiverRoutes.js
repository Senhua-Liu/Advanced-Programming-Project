// containReceiverRoutes


const express = require('express');
const router = express.Router();
const ContainReceiver = require('../models/containReceiver');

// GET all ContainReceiver
router.get('/', async (req, res) => {
    try {
        const containReceiver = await ContainReceiver.findAll();
        res.json(containReceiver);
    } catch (error) {
        console.error('Error fetching ContainReceiver:', error);
        res.status(500).send('Error fetching ContainReceiver');
    }
});

// GET a single ContainReceiver by id
router.get('/:id', async (req, res) => {
    try {
        const containReceiver = await ContainReceiver.findByPk(req.params.id);
        if (containReceiver) {
            res.json(containReceiver);
        } else {
            res.status(404).send('ContainReceiver not found');
        }
    } catch (error) {
        console.error('Error fetching ContainReceiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new ContainReceiver
router.post('/', async (req, res) => {
    try {
        const newContainReceiver = await ContainReceiver.create(req.body);
        res.status(201).json(newContainReceiver);
    } catch (error) {
        console.error('Error creating ContainReceiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a ContainReceiver
router.put('/:id', async (req, res) => {
    try {
        const updatedContainReceiver = await ContainReceiver.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedContainReceiver);
    } catch (error) {
        console.error('Error updating ContainReceiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a ContainReceiver
router.delete('/:id', async (req, res) => {
    try {
        await ContainReceiver.destroy({
            where: { id: req.params.id }
        });
        res.send('ContainReceiver deleted successfully');
    } catch (error) {
        console.error('Error deleting ContainReceiver:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
