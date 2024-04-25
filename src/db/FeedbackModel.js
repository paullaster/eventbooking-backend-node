import { sequilize } from "./dbConnection.js";
import { DataTypes } from 'sequelize';
import { Event } from "./EventsModel.js";

const Feedback = sequilize.define('Feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    eventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        },
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Feedback.sync({});

export { Feedback };