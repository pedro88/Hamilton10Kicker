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
    async aQuery(query: string) {
        let connection;
        try {
            connection = await pool.getConnection();
            const data = await connection.query(query);
            return data;
        } catch (err) {
            throw err;
        } finally {
            if (connection) connection.release();
        }
    }

    async allTables() {
        return await this.aQuery("SHOW TABLES");
    }

    async allElementInTables(tableName: string) {
        return await this.aQuery(`SELECT * FROM ${tableName}`);
    }

    async getAllButNoPass() {
        return await this.aQuery(
            `SELECT id, username, team, admin, subscription_date, team_id FROM users`
        );
    }

    async getAllIdUsernamePassAndTeamId() {
        return await this.aQuery(
            `SELECT id, username, password, team_id FROM users`
        );
    }

    async getAllTeam() {
        return await this.aQuery(`SELECT * FROM team`);
    }

    async newUser(username: string, password: string, team: string, team_id) {
        return await this.aQuery(
            `INSERT INTO users (username, password, team, team_id) VALUES ('${username}', '${password}', '${team}', '${team_id}')`
        );
    }

    async newMessage(lobby, userId, teamId, teamName, username, message) {
        return await this.aQuery(
            `INSERT INTO ${lobby} ( user_id, team_id, team_name, name, message ) VALUES ('${userId}', '${teamId}', '${teamName}', '${username}', "${message}")`
        );
    }

    async modifyMessage(lobby, messageId, content) {
        return await this.aQuery(
            `UPDATE ${lobby} SET message="${content}" WHERE id=${messageId}`
        );
    }

    async deleteMessage(lobby, messageId) {
        return await this.aQuery(`DELETE FROM ${lobby} WHERE id=${messageId}`);
    }

    async showAllMessage(lobby) {
        return await this.aQuery(`SELECT * FROM ${lobby}`);
    }

    async createLobby(lobbyName, user_id, username) {
        await this.aQuery(
            `INSERT INTO lobby_access (user_id, access) VALUES ('${user_id}', '${lobbyName}')`
        );
        return await this.aQuery(
            `CREATE TABLE IF NOT EXISTS ${lobbyName} (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            team_id INT,
            team_name VARCHAR (255),
            name VARCHAR(255),
            message VARCHAR(5000),
            post_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            creator_id INT DEFAULT ${user_id},
            creator_name VARCHAR(255) DEFAULT '${username}'
        )`
        );
    }

    async deleteLobby(lobbyName) {
        await this.aQuery(
            `DELETE FROM lobby_access WHERE access = '${lobbyName}'`
        );
        return await this.aQuery(`DROP TABLE ${lobbyName}`);
    }

    async checkUserAccess(lobbyName, userId) {
        const result = await this.aQuery(
            `SELECT * FROM lobby_access WHERE access = "${lobbyName}" AND user_id = ${userId}`
        );
        return result;
        // return result.length > 0;
    }
    
    async grantAccess(lobbyName, userId) {
        return await this.aQuery(
            `INSERT INTO lobby_access (lobby_name, user_id) VALUES (?, ?)`,
            [lobbyName, userId]
        );
    }
}

module.exports = dbInteract;
