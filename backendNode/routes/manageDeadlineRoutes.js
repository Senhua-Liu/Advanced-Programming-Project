// manageDeadlineRoutes


const express = require('express');
const router = express.Router();
const ManageDeadline = require('../models/manageDeadline');

// GET all ManageDeadline
router.get('/', async (req, res) => {
    try {
        const manageDeadline = await ManageDeadline.findAll();
        res.json(manageDeadline);
    } catch (error) {
        console.error('Error fetching ManageDeadline:', error);
        res.status(500).send('Error fetching ManageDeadline');
    }
});

// GET a single ManageDeadline by id
router.get('/:id', async (req, res) => {
    try {
        const manageDeadline = await ManageDeadline.findByPk(req.params.id);
        if (manageDeadline) {
            res.json(manageDeadline);
        } else {
            res.status(404).send('ManageDeadline not found');
        }
    } catch (error) {
        console.error('Error fetching ManageDeadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new ManageDeadline
router.post('/', async (req, res) => {
    try {
        const newManageDeadline = await ManageDeadline.create(req.body);
        res.status(201).json(newManageDeadline);
    } catch (error) {
        console.error('Error creating ManageDeadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a ManageDeadline
router.put('/:id', async (req, res) => {
    try {
        const updatedManageDeadline = await ManageDeadline.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedManageDeadline);
    } catch (error) {
        console.error('Error updating ManageDeadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a ManageDeadline
router.delete('/:id', async (req, res) => {
    try {
        await ManageDeadline.destroy({
            where: { id: req.params.id }
        });
        res.send('ManageDeadline deleted successfully');
    } catch (error) {
        console.error('Error deleting ManageDeadline:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
