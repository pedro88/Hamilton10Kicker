// import express, { Request, Response } from "express";
// import { authJwt } from "../middleware/authJwt";
// import { logger } from "../middleware/logger";
// const router = express.Router();
// router.use(express.json());
// const DBInteract = require("../services/DBInteract");
// const _db = DBInteract.getInstance();

// router.get("/", authJwt, logger, async (req: Request, res: Response) => {
//     const allFirstname = await _db.getAllFirstName();

//     if (allFirstname.length === 0) {
//         res.status(400).send({ success: false, message: "No firstname..." });
//         return;
//     }

//     res.send({
//         success: true,
//         message: "Your users list !",
//         content: allFirstname,
//     });
// });

// router.get("/:userId", authJwt, logger, async (req: Request, res: Response) => {
//     const user = await _db.getAnUser(req.params.userId);

//     if (user.length === 0) {
//         res.status(400).send({
//             success: false,
//             message: "The id is incorrect...",
//             content: user
//         });
//         return;
//     }

//     res.send({
//         success: true,
//         message: "The user information",
//         content: user
//     })
//     return;
// });

// module.exports = router;
