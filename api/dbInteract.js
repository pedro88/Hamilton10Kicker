// permet de simplement faire des query ailleurs dans le code

import * as dotenv from 'dotenv';

import mariadb from 'mariadb';
dotenv.config();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 5,
});

class dbInteract {
    async aQuery(query, params) {
        let connection;
        try {
            connection = await pool.getConnection();
            const data = await connection.query(query, params);
            return data;
        } catch (err) {
            throw err;
        } finally {
            if (connection) connection.release();
        };
    };

    // just for test
    async showAllTables(){
        return await this.aQuery(`SHOW TABLES`);
    };

    // get all game on solo game
    async getHistory(){
        return await this.aQuery(`SELECT * FROM solo_game ORDER BY created_at`);
    }

    // convert an id by name
    async getNameById(id){
        return await this.aQuery(`SELECT pseudo FROM player WHERE id=?` , [id]);
    }

    // get the id by pseudo
    async getIdByPseudo(pseudo){
        return await this.aQuery(`SELECT id FROM player WHERE pseudo=?`, [pseudo]);
    };

    // show all user
    async getAllUsers(){
        return await this.aQuery(`SELECT * FROM player`);
    }

    // create a new user
    async newUser(pseudo){
        return await this.aQuery(`INSERT INTO player (pseudo) VALUES (?)`, [pseudo]);
    };

    // create a new team
    async newTeam(playerId1, playerId2, teamName){
        return await this.aQuery(`INSERT INTO team (id_player_1, id_player_2, team_name) VALUES (?, ?)`, [playerId1, playerId2, teamName]);
    };

    // create a new solo game
    async newSoloGame(playerId1, playerId2, score_player_1, score_player_2, id_winner){
        return await this.aQuery(`INSERT INTO solo_game (id_player_1, id_player_2, score_player_1, score_player_2, id_winner) VALUES (?, ?, ?, ?, ?)`, [playerId1, playerId2, score_player_1, score_player_2, id_winner]);
    };

    // create a new team game 
    async newTeamGame(teamId1, teamId2, scoreTeam1, scoreTeam2, teamIdWinner){
        return await this.aQuery(`INSERT INTO team_game (id_team_1, id_team_2, score_team_1, score_team_2, id_winner_team) VALUES (?, ?, ?, ?, ?)`, [teamId1, teamId2, scoreTeam1, scoreTeam2, teamIdWinner]);
    };

    

}

export default dbInteract;
