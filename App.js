import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
const app = express()

import connect from './api/db/connect.js';
import router from './api/routes/apiRoutes.js';

app.use(express.static('./dist'));
app.use(express.json());
app.use('/api', router);
app.use((req, res) => {
    res.status(404).send("Error: 404 not found");
});

app.listen(process.env.PORT, () => {
    const conn = connect();
});