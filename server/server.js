import express from 'express';
import getRoutes from './routes/getRoutes.js';
import postRoutes from './routes/postRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());


app.get("/student", (req, res) => {
    res.send("This is working 🥳")
})

// Use GET and POST routes
app.use('/api', getRoutes);
app.use('/api', postRoutes);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});