import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { database, username, password, ...options } = db;

const sequilize = new Sequelize(database, username, password, options);

try {
    await sequilize.authenticate();
    console.log("Database connection established!");
} catch (error) {
    console.error('Unable to connect to dataase ', error);
}

export { sequilize };