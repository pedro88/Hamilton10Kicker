import express from "express"
import dbInteract from "../dbInteract";

const db = new dbInteract
const game = express.Router();
game.use(express.json())

//*****START NEW MATCH***** */
game.post("/newGame", async (req, res) => {


})


//*****SELECT PLAYERS***** */
game.get("/:player/:playerId", async (req, res) => { //player = player1/Team1 ou player2/Team1 ou player1/Team2 ou player2/Team2


})


//*****DEFINE WINNING TEAM***** */
game.post("/play/:teamId", async (req, res) => {


})


//*****DEFINE WINNER***** */
game.post("/play/:playerId", async (req, res) => {


})

//*****DEFINE NEW TEAM***** */