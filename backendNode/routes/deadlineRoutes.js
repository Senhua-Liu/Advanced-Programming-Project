// deadlineRoutes


const express = require('express');
const router = express.Router();
const Deadline = require('../models/deadline');

// GET all deadline
router.get('/', async (req, res) => {
    try {
        const deadline = await Deadline.findAll();
        res.json(deadline);
    } catch (error) {
        console.error('Error fetching deadline:', error);
        res.status(500).send('Error fetching deadline');
    }
});

// GET a single Deadline by id
router.get('/:id', async (req, res) => {
    try {
        const deadline = await Deadline.findByPk(req.params.id);
        if (deadline) {
            res.json(deadline);
        } else {
            res.status(404).send('Deadline not found');
        }
    } catch (error) {
        console.error('Error fetching Deadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Deadline
router.post('/', async (req, res) => {
    try {
        const newDeadline = await Deadline.create(req.body);
        res.status(201).json(newDeadline);
    } catch (error) {
        console.error('Error creating Deadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Deadline
router.put('/:id', async (req, res) => {
    try {
        const updatedDeadline = await Deadline.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedDeadline);
    } catch (error) {
        console.error('Error updating Deadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Deadline
router.delete('/:id', async (req, res) => {
    try {
        await Deadline.destroy({
            where: { id: req.params.id }
        });
        res.send('Deadline deleted successfully');
    } catch (error) {
        console.error('Error deleting Deadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
