// studentRoutes


const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// GET all Student
router.get('/', async (req, res) => {
    try {
        const student = await Student.findAll();
        res.json(student);
    } catch (error) {
        console.error('Error fetching Student:', error);
        res.status(500).send('Error fetching Student');
    }
});

// GET a single Student by id
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Student not found');
        }
    } catch (error) {
        console.error('Error fetching Student:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new Student
router.post('/', async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Error creating Student:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a Student
router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedStudent);
    } catch (error) {
        console.error('Error updating Student:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a Student
router.delete('/:id', async (req, res) => {
    try {
        await Student.destroy({
            where: { id: req.params.id }
        });
        res.send('Student deleted successfully');
    } catch (error) {
        console.error('Error deleting Student:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
