import mysql from 'mysql2'

// TO use the environment variables
// Create own .env 
import dotenv from 'dotenv'
dotenv.config()



const pool = mysql.createPool(
    {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port:process.env.MYSQL_PORT
    }
).promise()


// Test database connection. Use npm run-script runDB
async function pingDatabase() {
    try {
        // Execute a simple query to check database connection
        await pool.query('SELECT * From Users');
        console.log('Database connection successful!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// Call the pingDatabase function to test the connection
pingDatabase();



// Authentication Queries
// Registers a new user
async function registerUser(fullName, email, password, yearOfStudy, isTutor = false) {
    const query = `
        INSERT INTO Users (full_name, email, user_password, year_of_study, isTutor)
        VALUES (?, ?, ?, ?, ?)
    `;
    await pool.query(query, [fullName, email, password, yearOfStudy, isTutor]);
}

// Authenticates user by email and password
async function loginUser(email, password) {
    const query = `
        SELECT * FROM Users WHERE email = ? AND user_password = ?
    `;
    const [rows] = await pool.query(query, [email, password]);
    return rows[0];
}


// Student Flow Queries

// Fetches all campuses for dropdown selection
async function getAllCampuses() {
    const query = `SELECT campusID, campusName FROM Campus`;
    const [rows] = await pool.query(query);
    return rows;
}

// Retrieves subjects available for a specific campus
async function getSubjectsByCampus(campusID) {
    const query = `
        SELECT DISTINCT Subjects.subjectID, Subjects.subject_name 
        FROM Subjects
        JOIN Tutor_Teaches ON Subjects.subjectID = Tutor_Teaches.subjectID
        JOIN Users ON Tutor_Teaches.tutorID = Users.userID
        WHERE Users.campusID = ?
    `;
    const [rows] = await pool.query(query, [campusID]);
    return rows;
}

// Retrieves tutors for a specific subject at a specific campus
async function getTutorsBySubject(subjectID, campusID) {
    const query = `
        SELECT Users.userID, Users.full_name
        FROM Users
        JOIN Tutor_Teaches ON Users.userID = Tutor_Teaches.tutorID
        WHERE Tutor_Teaches.subjectID = ? AND Users.campusID = ? AND Users.isTutor = TRUE
    `;
    const [rows] = await pool.query(query, [subjectID, campusID]);
    return rows;
}

// Retrieves tutors for a specific subject and filters by rating
async function getTutorsByRating(subjectID, campusID, minRating) {
    const query = `
        SELECT Users.userID, Users.full_name, AVG(RateTutor.rating) AS avgRating
        FROM Users
        JOIN Tutor_Teaches ON Users.userID = Tutor_Teaches.tutorID
        LEFT JOIN RateTutor ON Users.userID = RateTutor.tutorID
        WHERE Tutor_Teaches.subjectID = ? AND Users.campusID = ? AND Users.isTutor = TRUE
        GROUP BY Users.userID
        HAVING avgRating >= ?
    `;
    const [rows] = await pool.query(query, [subjectID, campusID, minRating]);
    return rows;
}

// Sends a tutoring request by inserting into a request table
async function sendTutoringRequest(studentID, subjectID) {
    const query = `
        INSERT INTO Student_Attends (studentID, subjectID)
        VALUES (?, ?)
    `;
    await pool.query(query, [studentID, subjectID]);
}

// Rates a tutor after a session
async function rateTutor(tutorID, studentID, rating) {
    const query = `
        INSERT INTO RateTutor (tutorID, studentID, rating)
        VALUES (?, ?, ?)
    `;
    await pool.query(query, [tutorID, studentID, rating]);
}


// Tutor Flow Queries

// Adds a subject that a tutor can teach
async function addTutorSubject(tutorID, subjectID, dateAvailable) {
    const query = `
        INSERT INTO Tutor_Teaches (tutorID, subjectID, date_available)
        VALUES (?, ?, ?)
    `;
    await pool.query(query, [tutorID, subjectID, dateAvailable]);
}

// Retrieves list of subjects a tutor teaches
async function getTutorSubjects(tutorID) {
    const query = `
        SELECT Subjects.subjectID, Subjects.subject_name, Tutor_Teaches.date_available
        FROM Tutor_Teaches
        JOIN Subjects ON Tutor_Teaches.subjectID = Subjects.subjectID
        WHERE Tutor_Teaches.tutorID = ?
    `;
    const [rows] = await pool.query(query, [tutorID]);
    return rows;
}

// Retrieves incoming requests for a tutor
async function getIncomingRequests(tutorID) {
    const query = `
        SELECT Users.userID AS studentID, Users.full_name, Student_Attends.subjectID
        FROM Student_Attends
        JOIN Users ON Student_Attends.studentID = Users.userID
        WHERE Student_Attends.subjectID IN (
            SELECT subjectID FROM Tutor_Teaches WHERE tutorID = ?
        )
    `;
    const [rows] = await pool.query(query, [tutorID]);
    return rows;
}

// Accepts or declines a student request
async function updateRequestStatus(attendID, status) {
    const query = `
        UPDATE Student_Attends 
        SET status = ?
        WHERE attendID = ?
    `;
    await pool.query(query, [status, attendID]);
}


// Export all functions
export {
    registerUser,
    loginUser,
    getAllCampuses,
    getSubjectsByCampus,
    getTutorsBySubject,
    getTutorsByRating,
    sendTutoringRequest,
    rateTutor,
    addTutorSubject,
    getTutorSubjects,
    getIncomingRequests,
    updateRequestStatus
};