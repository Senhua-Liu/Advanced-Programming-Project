// viewerRoutes

const express = require('express');
const router = express.Router();
const Viewer = require('../models/viewer');

// GET all Viewer
router.get('/', async (req, res) => {
    try {
        const viewer = await Viewer.findAll();
        res.json(viewer);
    } catch (error) {
        console.error('Error fetching Viewer:', error);
        res.status(500).send('Error fetching Viewer');
    }
});

// GET a single Viewer by id
router.get('/:id', async (req, res) => {
    try {
        const viewer = await Viewer.findByPk(req.params.id);
        if (viewer) {
            res.json(viewer);
        } else {
            res.status(404).send('Viewer not found');
        }
    } catch (error) {
        console.error('Error fetching Viewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Viewer
router.post('/', async (req, res) => {
    try {
        const newViewer = await Viewer.create(req.body);
        res.status(201).json(newViewer);
    } catch (error) {
        console.error('Error creating Viewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Viewer
router.put('/:id', async (req, res) => {
    try {
        const updatedViewer = await Viewer.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedViewer);
    } catch (error) {
        console.error('Error updating Viewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Viewer
router.delete('/:id', async (req, res) => {
    try {
        await Viewer.destroy({
            where: { id: req.params.id }
        });
        res.send('Viewer deleted successfully');
    } catch (error) {
        console.error('Error deleting Viewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
