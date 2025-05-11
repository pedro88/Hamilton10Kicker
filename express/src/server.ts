import express, { Request, Response } from "express";
// import { authJwt } from "./middleware/authJwt";
import { logger } from "./middleware/logger";
import { AppDataSource } from "./config/database";
import "reflect-metadata";
import authRouter from "./routes/auth";

const cors = require("cors");

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.SERVER_PORT

console.log(process.env.DB_HOST)

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to db");
        

        const app = express();

        var corsOptions = {
            origin: ["http://localhost:3000"],
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: false,
            optionsSuccessStatus: 204,
        };

        app.use(cors(corsOptions));

        app.use("/", authRouter);
        // app.use("/users", usersRouter);

        app.get(
            "/",
            logger,
            (request: Request, response: Response) => {
                response.status(200).send({ message: "The api work well !" });
            }
        );

        app.listen(PORT, () => {
            console.log("Server is started ! => PORT :", PORT);
        });
    } catch (error) {
        console.error("Error with the DB", error);
    }
};

startServer();
