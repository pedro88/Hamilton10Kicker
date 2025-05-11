import express, { Request, Response } from "express";
import { EmailExist, LoginBody, RegisterBody } from "../lib/connectionType";
import { logger } from "../middleware/logger";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(express.json());

// documentation about the password verification and hash
// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

router.post("/register", logger, async (req: Request, res: Response) => {
    let theBody: RegisterBody = req.body;
    
    if (
        !theBody.username ||
        !theBody.email ||
        !theBody.password ||
        !theBody.country
        === undefined
    ) {
        res.status(400).send({
            success: false,
            message: "All field is required",
        });
        return;
    }
    
    if (theBody.username.length < 3) {
        res.status(400).send({
            success: false,
            message: "Username is incorrect, 3char min",
        });
        return;
    }

    if (theBody.country.length < 3) {
        res.status(400).send({
            success: false,
            message: "Country is not valid"
        });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(theBody.email)) {
        res.status(400).send({
            success: false,
            message: "Email format is invalid",
        });
        return;
    }
    
    if (theBody.password.length < 8) {
        res.status(400).send({
            success: false,
            message: "Password is incorrect, 8char min",
        });
        return;
    }
    
    const verifyEmail: EmailExist[] = await _db.emailExist(theBody.email);
    if (verifyEmail.length > 0) {
        res.status(409).send({
            success: false,
            message: "This email is taken",
        });
        return;
    }
    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(theBody.password, salt);
    theBody.password = hashedPassword;
    _db.createUser(theBody);

    res.status(201).send({
        success: true,
        message: `The user ${theBody.username} are created !`,
    });
    return;
});

// router.post("/login", logger, async (req: Request, res: Response) => {
//     let theBody: LoginBody = req.body;
    
    
//     if (!theBody.email || !theBody.password) {
//         res.status(400).send({
//             success: false,
//             message: "Email and password field is required",
//         });
//         return;
//     }
    
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(theBody.email)) {
//         res.status(400).send({
//             success: false,
//             message: "Email format is invalid",
//         });
//         return;
//     }
    
//     if (theBody.password.length < 8) {
//         res.status(400).send({
//             success: false,
//             message: "Password is incorrect, 8char min",
//         });
//         return;
//     }
    
//     const dbResponse: LoginBody[] = await _db.loginCredential(theBody.email);
//     if (dbResponse.length === 0) {
//         res.status(400).send({
//             success: false,
//             message: "The password or email is incorrect",
//         });
//         return;
//     }

//     const passwordVerification = await bcrypt.compare(
//         theBody.password,
//         dbResponse[0].password
//     );

//     if (!passwordVerification) {
//         res.status(400).send({
//             success: false,
//             message: "The password or email is incorrect",
//         });
//         return;
//     }

//     delete dbResponse[0].password;
//     const jwtToken = await jwt.sign(dbResponse[0], process.env.SECRET, {
//         expiresIn: "1h",
//     });
//     res.send({
//         success: true,
//         message: "You are logged !",
//         content: dbResponse,
//         token: jwtToken,
//     });
// });

// module.exports = router;
