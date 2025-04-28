import express, { Request, Response } from "express";
const bcrypt = require("bcrypt");
const router = express.Router();

// I'm stopped here. The doc
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/register", (res: Response, req: Request) => {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, (err: string, salt: string) => {
        if (err) {
            console.log("No salt... : ", err);
            return;
        }
    });
});

module.exports = router;
