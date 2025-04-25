import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

const testRouter = require("./controllers/TestController");

app.use("/test", testRouter);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});