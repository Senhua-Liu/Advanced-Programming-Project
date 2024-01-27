// internshipRoutes


const express = require('express');
const router = express.Router();
const Internship = require('../models/internship');

// GET all Internship
router.get('/', async (req, res) => {
    try {
        const internship = await Internship.findAll();
        res.json(internship);
    } catch (error) {
        console.error('Error fetching Internship:', error);
        res.status(500).send('Error fetching Internship');
    }
});

// GET a single Internship by id
router.get('/:id', async (req, res) => {
    try {
        const internship = await Internship.findByPk(req.params.id);
        if (internship) {
            res.json(internship);
        } else {
            res.status(404).send('Internship not found');
        }
    } catch (error) {
        console.error('Error fetching Internship:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Internship
router.post('/', async (req, res) => {
    try {
        const newInternship = await Internship.create(req.body);
        res.status(201).json(newInternship);
    } catch (error) {
        console.error('Error creating Internship:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Internship
router.put('/:id', async (req, res) => {
    try {
        const updatedInternship = await Internship.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedInternship);
    } catch (error) {
        console.error('Error updating Internship:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Internship
router.delete('/:id', async (req, res) => {
    try {
        await Internship.destroy({
            where: { id: req.params.id }
        });
        res.send('Internship deleted successfully');
    } catch (error) {
        console.error('Error deleting Internship:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
