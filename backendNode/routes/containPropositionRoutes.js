const express = require('express');
const router = express.Router();
const ContainProposition = require('../models/containProposition');

// GET all ContainProposition
router.get('/', async (req, res) => {
    try {
        const containProposition = await ContainProposition.findAll();
        res.json(containProposition);
    } catch (error) {
        console.error('Error fetching ContainProposition:', error);
        res.status(500).send('Error fetching ContainProposition');
    }
});

// GET a single ContainProposition by id
router.get('/:id', async (req, res) => {
    try {
        const containProposition = await ContainProposition.findByPk(req.params.id);
        if (containProposition) {
            res.json(containProposition);
        } else {
            res.status(404).send('ContainProposition not found');
        }
    } catch (error) {
        console.error('Error fetching ContainProposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new ContainProposition
router.post('/', async (req, res) => {
    try {
        const newContainProposition = await ContainProposition.create(req.body);
        res.status(201).json(newContainProposition);
    } catch (error) {
        console.error('Error creating ContainProposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a ContainProposition
router.put('/:id', async (req, res) => {
    try {
        const updatedContainProposition = await ContainProposition.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedContainProposition);
    } catch (error) {
        console.error('Error updating ContainProposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a ContainProposition
router.delete('/:id', async (req, res) => {
    try {
        await ContainProposition.destroy({
            where: { id: req.params.id }
        });
        res.send('ContainProposition deleted successfully');
    } catch (error) {
        console.error('Error deleting ContainProposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
