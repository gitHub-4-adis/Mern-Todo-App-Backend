import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
const app = express();

import connect from './db/connect.js';
import router from './routes/apiRoutes.js';

app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.use('/todo', router);
app.use((req, res) => {
    res.status(404).send("Error: 404 not founddkfsdjflsdjflds");
});

app.listen(process.env.PORT, '0.0.0.0', () => {
    const conn = connect();
});

export default app;