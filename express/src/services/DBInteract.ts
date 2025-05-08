require("dotenv").config();
const mariadb = require("mariadb");
import { RegisterBody } from "../lib/connectionType";

// Singleton pattern documentation
// https://dev.to/talr98/singleton-design-pattern-use-case-with-node-js-typescript-express-js-5ebb

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    connectionLimit: 10,
    connectTimeout: 30000,
    acquireTimeout: 30000,
    trace: true,
});

class DBInteract {
    private static instance: DBInteract | null = null;
    
    public static getInstance(): DBInteract {
        if (!DBInteract.instance) {
            DBInteract.instance = new DBInteract();
        }
        return DBInteract.instance;
    }

    async aQuery(query: string, params?: any[]) {
        let connection;
        try {
            connection = await pool.getConnection();
            const data = await connection.query(query, params);
            return data;
        } catch (err) {
            console.error("Erreur dans la requête SQL:", err);
            throw err;
        } finally {
            if (connection) connection.release();
        }
    }

    async createUser(body: RegisterBody) {
        return await this.aQuery(
            "INSERT INTO users (type, firstname, country, email, industry, phone, password, policy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [
                body.username,
                body.country,
                body.email,
                body.password
            ]
        );
    }

    async emailExist(email: string) {
        return await this.aQuery("SELECT email FROM users WHERE email = ?", [
            email,
        ]);
    }

    async loginCredential(email: string) {
        return await this.aQuery(
            "SELECT id, firstname, email, password FROM users WHERE email = ?",
            [email]
        );
    }

    async getAllFirstName() {
        return await this.aQuery("SELECT id, firstname FROM users");
    }

    async getAnUser(userId: number) {
        return await this.aQuery(
            "SELECT id, type, firstname, country, email, industry, phone FROM users WHERE id = ?",
            [userId]
        );
    }
}

module.exports = DBInteract;

// CREATE TABLE user (
// id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
// email varchar(255),
// password varchar(255),
// country varchar(50)
// );
