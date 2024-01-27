const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const saltRounds = 10;


router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findAll({ where: { id: id }, order: [['createdAt', 'DESC']] });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/register', async (req, res) => {
    const { name, email, password, type } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log("TEST hashedPassword: ", hashedPassword);
        const newUser = await User.create({ name, email, password: hashedPassword, type });
        // res.status(201).json(newUser);
        res.status(201).json({ userId: newUser.userId, name: newUser.name, email: newUser.email, type: newUser.type });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;