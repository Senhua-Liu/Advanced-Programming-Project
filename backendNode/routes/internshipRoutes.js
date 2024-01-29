// internshipRoutes

const express = require('express');
const Internship = require('../models/internship');
const multer = require('multer');
const router = express.Router();
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    //   cb(null, path.join(__dirname, '../uploads')); 
      cb(null, './uploads'); 
    },
    filename: function(req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    //   cb(null, file.originalname + '-' + uniqueSuffix + path.extname(file.originalname));
        const internshipId = req.params.internshipId;
        const fileType = req.params.fileType;

        let fileCategory;
        if (fileType === 'CdC') fileCategory = 2;
        else if (fileType === 'final report') fileCategory = 1;
        else fileCategory = 'unknown'; 

        const newFileName = `${internshipId}-${fileCategory}-${file.originalname}`;
        cb(null, newFileName);
    }
});
const upload = multer({ storage: storage });



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


// GET Internships by studentID
router.get('/student/:studentID', async (req, res) => {
    try {
        const internships = await Internship.findAll({
            where: { studentID: req.params.studentID }
        });
        res.json(internships);
    } catch (error) {
        console.error('Error fetching Internships by studentID:', error);
        res.status(500).send('Internal Server Error');
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



// POST route for file upload
router.post('/upload/:internshipId/:fileType', upload.single('file'), async (req, res) => {
    const { internshipId, fileType } = req.params;
    const studentID = req.body.studentID;
    console.log("File:", req.file, "FileType:", fileType, "StudentID:", studentID);
  
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    try {
        const internship = await Internship.findByPk(internshipId);
        
        if (!internship) {
            return res.status(404).send('Internship not found.');
        }
        // let files;
        // if (typeof internship.files === 'string') {
        //     files = JSON.parse(internship.files);
        // } else {
        //     files = internship.files || [];
        // }
        let files = typeof internship.files === 'string' ? JSON.parse(internship.files) : internship.files;
        const fileIndex = files.findIndex(file => file.type === fileType);
        console.log("TEST fileIndex: ", fileIndex);
        if (fileIndex !== -1) {
            console.log("TEST files[fileIndex].finished: ", files[fileIndex].finished);
            console.log("TEST files[fileIndex].finished: ", files[fileIndex].category);
            console.log("TEST files[fileIndex].finished: ", files[fileIndex+2].finished);
            files[fileIndex].finished = true;
            console.log("TEST files[fileIndex].finished: ", files[fileIndex].finished);
            await Internship.update({ files }, { where: { id: internshipId } });
            res.send('File uploaded and status updated successfully.');
        } else {
            res.status(404).send('File type not found.');
        }
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file.');
    }
});




// GET Internships by studentID, sorted by createdAt in descending order
router.get('/student/:studentID/latest', async (req, res) => {
    try {
        const internships = await Internship.findAll({
            where: { studentID: req.params.studentID },
            order: [['createdAt', 'DESC']]
        });

        if (internships.length > 0) {
            const latestInternship = internships[0]; 
            res.json(latestInternship);
        } else {
            res.json({ message: "No internships found for this student." });
        }
    } catch (error) {
        console.error('Error fetching Internships by studentID:', error);
        res.status(500).send('Internal Server Error');
    }
});









module.exports = router;
