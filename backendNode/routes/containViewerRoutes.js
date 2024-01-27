// containViewerRoutes


const express = require('express');
const router = express.Router();
const ContainViewer = require('../models/containViewer');

// GET all ContainViewer
router.get('/', async (req, res) => {
    try {
        const containViewer = await ContainViewer.findAll();
        res.json(containViewer);
    } catch (error) {
        console.error('Error fetching ContainViewer:', error);
        res.status(500).send('Error fetching ContainViewer');
    }
});

// GET a single ContainViewer by id
router.get('/:id', async (req, res) => {
    try {
        const containViewer = await ContainViewer.findByPk(req.params.id);
        if (containViewer) {
            res.json(containViewer);
        } else {
            res.status(404).send('ContainViewer not found');
        }
    } catch (error) {
        console.error('Error fetching ContainViewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new ContainViewer
router.post('/', async (req, res) => {
    try {
        const newContainViewer = await ContainViewer.create(req.body);
        res.status(201).json(newContainViewer);
    } catch (error) {
        console.error('Error creating ContainViewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a ContainViewer
router.put('/:id', async (req, res) => {
    try {
        const updatedContainViewer = await ContainViewer.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedContainViewer);
    } catch (error) {
        console.error('Error updating ContainViewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a ContainViewer
router.delete('/:id', async (req, res) => {
    try {
        await ContainViewer.destroy({
            where: { id: req.params.id }
        });
        res.send('ContainViewer deleted successfully');
    } catch (error) {
        console.error('Error deleting ContainViewer:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
