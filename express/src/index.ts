import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

app.get('/', (request: Request, response: Response) => {
    console.log("Called")
    response.send(["PROUT"])
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});