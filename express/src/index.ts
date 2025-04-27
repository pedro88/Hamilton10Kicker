import express from 'express';

const app = express();

const PORT = 3000;

const sourceRouter = require("./routes/source");
const testRouter = require("./routes/test");

app.use("/", sourceRouter);
app.use("/test", testRouter);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});