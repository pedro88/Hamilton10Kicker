import express, { Request, Response } from "express";
const bcrypt = require("bcrypt");
const router = express.Router();

// I'm stopped here. The doc
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/register", async (res: Response, req: Request) => {
    const saltRounds = 10;
    const userPassword = "12345678";

    await bcrypt.genSalt(saltRounds, (err: string, salt: string) => {
        if (err) {
            console.log("No salt... : ", err);
            return;
        }
        
        bcrypt.hash(userPassword, salt, (error: string, hash: string) => {
            if (error) {
                console.log(error)
                return;
            }

        console.log('Hashed password:', hash);
        res.send({message: `The password : ${hash}`})
        });

    });
    
});

module.exports = router;
