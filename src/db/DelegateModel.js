import { sequilize } from "./dbConnection.js";
import { DataTypes } from 'sequelize';
import { Booking } from "./BookingModel.js";

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
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    booking: {
        type: DataTypes.INTEGER,
        references: {
            model: Booking,
            key: 'id'
        },
        allowNull: false
    }
});

Delegate.sync({});

export { Delegate };