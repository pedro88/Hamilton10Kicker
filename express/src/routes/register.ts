import express, { Request, Response } from "express";
const bcrypt = require("bcrypt");
const router = express.Router();

// I'm stopped here. The doc
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/register", async (res: Response, req: Request) => {
    const saltRounds = 10;
    const userPassword = "12345678";
    let salty;
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
        
        // Hashing successful, 'hash' contains the hashed password
        console.log('Hashed password:', hash);
        });

    });
    
});

module.exports = router;
