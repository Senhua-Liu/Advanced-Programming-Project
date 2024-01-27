// tutorRoutes

const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');

// GET all Tutor
router.get('/', async (req, res) => {
    try {
        const tutor = await Tutor.findAll();
        res.json(tutor);
    } catch (error) {
        console.error('Error fetching Tutor:', error);
        res.status(500).send('Error fetching Tutor');
    }
});

// GET a single Tutor by id
router.get('/:id', async (req, res) => {
    try {
        const tutor = await Tutor.findByPk(req.params.id);
        if (tutor) {
            res.json(tutor);
        } else {
            res.status(404).send('Tutor not found');
        }
    } catch (error) {
        console.error('Error fetching Tutor:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Tutor
router.post('/', async (req, res) => {
    try {
        const newTutor = await Tutor.create(req.body);
        res.status(201).json(newTutor);
    } catch (error) {
        console.error('Error creating Tutor:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Tutor
router.put('/:id', async (req, res) => {
    try {
        const updatedTutor = await Tutor.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedTutor);
    } catch (error) {
        console.error('Error updating Tutor:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Tutor
router.delete('/:id', async (req, res) => {
    try {
        await Tutor.destroy({
            where: { id: req.params.id }
        });
        res.send('Tutor deleted successfully');
    } catch (error) {
        console.error('Error deleting Tutor:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
