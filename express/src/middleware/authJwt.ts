import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

export const authJwt = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        res.sendStatus(401);
    } else {
        jwt.verify(token, process.env.SECRET as string, (err: any) => {

            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    }
};

// export const authJwt = (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): void => {
//     if (!req.headers.authorization) {
//         res.status(403).send({ message: "No token provided!" });
//     } else {
//         // Token validation logic here
//         next();
//     }
// };
