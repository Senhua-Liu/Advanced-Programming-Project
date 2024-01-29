// userRoutes
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
    const { firstName, lastName, email, password, ...optionalFields } = req.body;
    let type;
    if (email.endsWith('.fr')) {
        type = 'admin';
    } else if (email.endsWith('.net')) {
        type = 'student';
    } else {
        type = 'tutor';
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log("TEST hashedPassword: ", hashedPassword);
        const newUser = await User.create({ firstName, lastName, email, password: hashedPassword, type, ...optionalFields, });
        // res.status(201).json(newUser);
        // res.status(201).json({ id: newUser.id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, type: newUser.type });
        res.status(201).json(newUser.toJSON());
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email: email } });
        
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) { 
                res.status(200).send({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, type: user.type });
            
            } else {
                res.status(401).send('Les saisies sont incorrectes.');
            }
        } else {
            res.status(404).send('Utilisateur non trouvé.');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;