import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "../mongodb/connect.js";
import postRoutes from "../routes/postRoutes.js";
import dalleRoutes from "../routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E');
})

// app.get('/another/', async (req, res) => {
//     res.send('Hello from DALL-E - another');
// })

app.listen(3000, () => console.log('Server ready on port 3000.'));

export default app;
