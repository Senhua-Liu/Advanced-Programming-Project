const express = require('express');
const router = express.Router();
const Company = require('../models/company');

// GET all companies
router.get('/', async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).send('Error fetching companies');
    }
});

// GET a single company by id
router.get('/:id', async (req, res) => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (company) {
            res.json(company);
        } else {
            res.status(404).send('Company not found');
        }
    } catch (error) {
        console.error('Error fetching company:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST a new company
router.post('/', async (req, res) => {
    try {
        const newCompany = await Company.create(req.body);
        res.status(201).json(newCompany);
    } catch (error) {
        console.error('Error creating company:', error);
        res.status(500).send('Internal Server Error');
    }
});

// PUT to update a company
router.put('/:id', async (req, res) => {
    try {
        const updatedCompany = await Company.update(req.body, {
            where: { id: req.params.id }
        });
        res.json(updatedCompany);
    } catch (error) {
        console.error('Error updating company:', error);
        res.status(500).send('Internal Server Error');
    }
});

// DELETE a company
router.delete('/:id', async (req, res) => {
    try {
        await Company.destroy({
            where: { id: req.params.id }
        });
        res.send('Company deleted successfully');
    } catch (error) {
        console.error('Error deleting company:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
