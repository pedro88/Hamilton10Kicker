import { DataSource } from "typeorm";
import { join } from "path";


import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [join(__dirname, "..", "entities", "*.entity.{ts,js}")],
    migrations: [join(__dirname, "..", "migrations", "*.{ts,js}")],
    subscribers: [join(__dirname, "..", "subscribers", "*.subscriber.{ts,js}")],
    extra: {
        connectionLimit: 10
    }
});
