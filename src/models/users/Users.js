import { Sequelize } from "sequelize";
import db from "../../database/database.js";

export default db.define('user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.ENUM('operator', 'admin'),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});