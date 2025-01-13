// permet de simplement faire des query ailleurs dans le code

const dotenv = require("dotenv");
const mariadb = require("mariadb");
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

    async showAllTables(){
        return await this.aQuery(`SHOW TABLES`);
    };

    async getIdByPseudo(pseudo){
        return await this.aQuery(`SELECT id FROM player WHERE pseudo=?`, [pseudo]);
    }

    async newUser(pseudo){
        return await this.aQuery(`INSERT INTO player (pseudo) VALUES (?)`, [pseudo]);
    };

    async newTeam(playerId1, playerId2){
        return await this.aQuery(`INSERT INTO team (id_player_1, id_player_2) VALUES (?, ?)`, [playerId1, playerId2]);
    };

    async newSoloGame(playerId1, playerId2, score_player_1, score_player_2, id_winner){
        return await this.aQuery(`INSERT INTO solo_game (id_player_1, id_player_2, score_player_1, score_player_2, id_winner) VALUES (?, ?, ?, ?, ?)`, [playerId1, playerId2, score_player_1, score_player_2, id_winner]);
    }

}

export default dbInteract;
