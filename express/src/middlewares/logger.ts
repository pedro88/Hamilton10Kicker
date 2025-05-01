import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();
router.use(express.json());

module.exports = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); 
};
    