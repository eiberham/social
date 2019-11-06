import { Sequelize } from "sequelize";

export const db = new Sequelize('appointy', 'postgres', 'postgres', {
    dialect: 'postgres'
});