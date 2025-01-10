import express from "express"
import dbInteract from "../dbInteract";

const db = new dbInteract
const player = express.Router();
player.use(express.json())

//****ADD PLAYER*** */
player.post("/addPlayer", async (req, res) => {


})


//****DISPLAY PLAYER STATS**** */
player.get("/:playerID", async (req, res) => {


})


//*****DISPLAY LEADERBOARD***** */
player.get("/leaderboard", async (req, res) => {

    
})

