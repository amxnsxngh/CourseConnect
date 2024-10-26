import express from 'express';
import * as db from '../database.js';

const router = express.Router();

// Get all campuses for dropdown selection
router.get('/campuses', async (req, res) => {
    try {
        const campuses = await db.getAllCampuses();
        res.json(campuses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching campuses' });
    }
});

// Get subjects available for a specific campus
router.get('/subjects/:campusID', async (req, res) => {
    const { campusID } = req.params;
    try {
        const subjects = await db.getSubjectsByCampus(campusID);
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching subjects' });
    }
});

// Get tutors available for a specific subject and campus
router.get('/tutors/:subjectID/:campusID', async (req, res) => {
    const { subjectID, campusID } = req.params;
    try {
        const tutors = await db.getTutorsBySubject(subjectID, campusID);
        res.json(tutors);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tutors' });
    }
});

// Get tutors by rating filter
router.get('/tutors/:subjectID/:campusID/:minRating', async (req, res) => {
    const { subjectID, campusID, minRating } = req.params;
    try {
        const tutors = await db.getTutorsByRating(subjectID, campusID, minRating);
        res.json(tutors);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tutors by rating' });
    }
});

// Get list of subjects a tutor teaches
router.get('/tutor/subjects/:tutorID', async (req, res) => {
    const { tutorID } = req.params;
    try {
        const subjects = await db.getTutorSubjects(tutorID);
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tutor subjects' });
    }
});

// Get incoming student requests for a tutor
router.get('/tutor/requests/:tutorID', async (req, res) => {
    const { tutorID } = req.params;
    try {
        const requests = await db.getIncomingRequests(tutorID);
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching incoming requests' });
    }
});

export default router;