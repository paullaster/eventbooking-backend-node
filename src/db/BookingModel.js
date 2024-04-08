import { sequilize } from "./dbConnection.js";
import { DataTypes } from 'sequelize';
import { Event } from "./EventsModel.js";

const Booking = sequilize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    delegate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        },
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        values: ['New', 'Booked'],
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        values: ['Male', 'Female', 'Prefer not to say'],
        allowNull: false,
    },
    payment: {
        type: DataTypes.STRING,
        values: ['Pending', 'Partially Paid', 'Paid'],
        allowNull: false,
    },
});

Booking.sync({});

export { Booking };