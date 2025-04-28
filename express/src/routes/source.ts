import express, { Request, Response } from 'express';

const router = express.Router();
router.use(express.json());

// use a middleware
const logger = require('../middlewares/logger');

router.get("/", logger,(req: Request, res: Response) => {
    res.send({message: "The api work well !"});
})

router.post("/", (req: Request, res: Response) => {  
    res.status(201).send(req.body);
})

module.exports = router;