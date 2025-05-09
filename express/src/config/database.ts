import { DataSource } from "typeorm";
import { join } from "path";

export const AppDataSource = new DataSource({
    type: "mariadb", // ou "mysql", "sqlite", etc.
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true, // false in production
    logging: true,
    entities: [join(__dirname, "..", "entities", "*.entity.{ts,js}")],
    migrations: [join(__dirname, "..", "migrations", "*.{ts,js}")],
    subscribers: [join(__dirname, "..", "subscribers", "*.subscriber.{ts,js}")],
});
