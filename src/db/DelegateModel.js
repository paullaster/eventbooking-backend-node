import { sequilize } from "./dbConnection.js";
import { DataTypes } from 'sequelize'

const Delegate = sequilize.define('Delegate', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

Delegate.sync();

export { Delegate };