import express from 'express';
import * as db from '../database.js';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { fullName, email, password, yearOfStudy, isTutor } = req.body;
    try {
        await db.registerUser(fullName, email, password, yearOfStudy, isTutor);
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Login an existing user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await db.loginUser(email, password);
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error logging in user' });
    }
});

// Send a tutoring request
router.post('/request-tutor', async (req, res) => {
    const { studentID, tutorID, subjectID } = req.body;
    try {
        await db.sendTutoringRequest(studentID, tutorID, subjectID);
        res.json({ message: 'Tutoring request sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending tutoring request' });
    }
});

// Rate a tutor after session
router.post('/rate-tutor', async (req, res) => {
    const { tutorID, studentID, rating } = req.body;
    try {
        await db.rateTutor(tutorID, studentID, rating);
        res.json({ message: 'Tutor rated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error rating tutor' });
    }
});

// Add a subject for a tutor
router.post('/tutor/add-subject', async (req, res) => {
    const { tutorID, subjectID, dateAvailable } = req.body;
    try {
        await db.addTutorSubject(tutorID, subjectID, dateAvailable);
        res.json({ message: 'Subject added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding subject for tutor' });
    }
});

// Update request status (Accept/Decline request)
router.post('/tutor/update-request', async (req, res) => {
    const { attendID, status } = req.body;
    try {
        await db.updateRequestStatus(attendID, status);
        res.json({ message: 'Request status updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating request status' });
    }
});

export default router;