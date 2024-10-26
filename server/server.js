// server.js
const express = require('express');
const cors = require('cors'); // To allow cross-origin requests
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// Endpoint to handle student form data
app.post("/api/student", (req, res) => {
    const { studentNumber, name, surname, qualification, year, availability } = req.body;
    console.log("Received Student Data:", req.body);

    // Process or save the data (e.g., store in DB)
    res.status(200).json({ message: "Student data received successfully!" });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
