import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { authJwt } from "./middleware/authJwt";
import { logger } from "./middleware/logger";
import { AppDataSource } from "./config/database";

const cors = require("cors");

dotenv.config();

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

        const authRouter = require("./routes/auth");
        const usersRouter = require("./routes/users");

        app.use("/", authRouter);
        app.use("/users", usersRouter);

        app.get(
            "/",
            authJwt,
            logger,
            (request: Request, response: Response) => {
                response.status(200).send({ message: "The api work well !" });
            }
        );

        app.listen(process.env.PORT, () => {
            console.log("Server is started");
        });
    } catch (error) {
        console.error("Error with the DB", error);
    }
};

startServer();
