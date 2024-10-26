import express from 'express';
import getRoutes from './routes/getRoutes.js';
import postRoutes from './routes/postRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Use GET and POST routes
// app.use('/api', getRoutes);
// app.use('/api', postRoutes);

const PORT = process.env.MYSQL_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});