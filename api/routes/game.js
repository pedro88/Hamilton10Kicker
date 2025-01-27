import express from "express"
import dbInteract from "../dbInteract.js";

const db = new dbInteract
const game = express.Router();
game.use(express.json())

// //*****NEW MATCH***** */
// game.post("/newGame", async (req, res) => {


// })


// //*****SELECT PLAYERS***** */
// game.get("/:player/:playerId", async (req, res) => { //player = player1/Team1 ou player2/Team1 ou player1/Team2 ou player2/Team2


// })

game.get("/history", async (req, res) => {
    try{
        // je prend l'historique dans la db
        let history = await db.getHistory();
        // je boucle pour choper tous les id et les convertir pour les réassigner
        for(let i = 0; i < history.length; i++){
            const idInHistory1 = history[i].id_player_1; 
            const idInHistory2 = history[i].id_player_2; 
            const idInHistory3 = history[i].id_winner;
            const name1 = await db.getNameById(idInHistory1);
            const name2 = await db.getNameById(idInHistory2);
            const name3 = await db.getNameById(idInHistory3); 
            history[i].id_player_1 = name1[0].pseudo;
            history[i].id_player_2 = name2[0].pseudo;
            history[i].id_winner = name3[0].pseudo;
        }
        // je retourne la liste 
        res.send(history);
    }catch(err){
        console.log("Y'a une couille dans le pathés : ", err);
    }
})

//*****DEFINE WINNING TEAM***** */
game.post("/play/:teamId", async (req, res) => {
    console.log("in")
    await db.newTeamGame(teamId1, teamId2, scoreTeam1, scoreTeam2, teamIdWinner);
    console.log("out")
res.status(200);

})


//*****DEFINE WINNER***** */
game.post("/play/:playerId", async (req, res) => {
await db.newSoloGame(playerId1, playerId2, score_player_1, score_player_2, id_winner)

res.status(200);
})

//*****DEFINE NEW TEAM***** */


/* historique des matchs team et solo avec nom team ou nom joueur si solo les 2 score et le winner 
    Pour le leaderboard Pseudo nWin nDefeat Ratio nGoal solo | team
    Profile joueur avec l'historique des matchs */
    export default game
