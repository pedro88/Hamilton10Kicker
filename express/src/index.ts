import express from 'express';

const app = express();

const PORT = 3000;

const sourceRouter = require("./routes/source");
const testRouter = require("./routes/test");
const registerRouter = require("./routes/register");

app.use("/", sourceRouter);
app.use("/test", testRouter);
app.use("/", registerRouter);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});