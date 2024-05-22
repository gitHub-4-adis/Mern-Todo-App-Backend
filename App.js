import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
const app = express()

import connect from './api/db/connect.js';
import router from './api/routes/apiRoutes.js';

app.use(cors({
    origin: "https://664e5d434e05c13919c92868--stellular-tiramisu-4e3688.netlify.app/",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());

app.use('/api', router);
app.use((req, res) => {
    res.status(404).send("Error: 404 not found");
});

app.listen(process.env.PORT, () => {
    const conn = connect();
});