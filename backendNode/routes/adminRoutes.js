const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

// GET all admin
router.get('/', async (req, res) => {
    try {
        const admin = await Admin.findAll();
        res.json(admin);
    } catch (error) {
        console.error('Error fetching admin:', error);
        res.status(500).send('Error fetching admin');
    }
});

// GET a single Admin by id
router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findByPk(req.params.id);
        if (admin) {
            res.json(admin);
        } else {
            res.status(404).send('Admin not found');
        }
    } catch (error) {
        console.error('Error fetching Admin:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Admin
router.post('/', async (req, res) => {
    try {
        const newAdmin = await Admin.create(req.body);
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error creating Admin:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Admin
router.put('/:id', async (req, res) => {
    try {
        const updatedAdmin = await Admin.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedAdmin);
    } catch (error) {
        console.error('Error updating Admin:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Admin
router.delete('/:id', async (req, res) => {
    try {
        await Admin.destroy({
            where: { id: req.params.id }
        });
        res.send('Admin deleted successfully');
    } catch (error) {
        console.error('Error deleting Admin:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
