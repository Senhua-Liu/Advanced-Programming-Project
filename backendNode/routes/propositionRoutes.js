// propositionRoutes


const express = require('express');
const router = express.Router();
const Proposition = require('../models/proposition');

// GET all Proposition
router.get('/', async (req, res) => {
    try {
        const proposition = await Proposition.findAll();
        res.json(proposition);
    } catch (error) {
        console.error('Error fetching Proposition:', error);
        res.status(500).send('Error fetching Proposition');
    }
});

// GET a single Proposition by id
router.get('/:id', async (req, res) => {
    try {
        const proposition = await Proposition.findByPk(req.params.id);
        if (proposition) {
            res.json(proposition);
        } else {
            res.status(404).send('Proposition not found');
        }
    } catch (error) {
        console.error('Error fetching Proposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Proposition
router.post('/', async (req, res) => {
    try {
        const newProposition = await Proposition.create(req.body);
        res.status(201).json(newProposition);
    } catch (error) {
        console.error('Error creating Proposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Proposition
router.put('/:id', async (req, res) => {
    try {
        const updatedProposition = await Proposition.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedProposition);
    } catch (error) {
        console.error('Error updating Proposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Proposition
router.delete('/:id', async (req, res) => {
    try {
        await Proposition.destroy({
            where: { id: req.params.id }
        });
        res.send('Proposition deleted successfully');
    } catch (error) {
        console.error('Error deleting Proposition:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
