// fileRoutes

const express = require('express');
const router = express.Router();
const File = require('../models/file');


// GET all File
router.get('/', async (req, res) => {
    try {
        const file = await File.findAll();
        res.json(file);
    } catch (error) {
        console.error('Error fetching File:', error);
        res.status(500).send('Error fetching File');
    }
});

// GET a single File by id
router.get('/:id', async (req, res) => {
    try {
        const file = await File.findByPk(req.params.id);
        if (file) {
            res.json(file);
        } else {
            res.status(404).send('File not found');
        }
    } catch (error) {
        console.error('Error fetching File:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new File
router.post('/', async (req, res) => {
    try {
        const newFile = await File.create(req.body);
        res.status(201).json(newFile);
    } catch (error) {
        console.error('Error creating File:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a File
router.put('/:id', async (req, res) => {
    try {
        const updatedFile = await File.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedFile);
    } catch (error) {
        console.error('Error updating File:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a File
router.delete('/:id', async (req, res) => {
    try {
        await File.destroy({
            where: { id: req.params.id }
        });
        res.send('File deleted successfully');
    } catch (error) {
        console.error('Error deleting File:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
