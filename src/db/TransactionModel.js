import { sequilize } from './dbConnection.js';
import { DataTypes } from 'sequelize';
import { Booking } from './BookingModel.js';

const Transaction = sequilize.define('Transaction', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookingNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Booking,
            key: 'id',
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    transactionID: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    status: {
        type: DataTypes.STRING,
        values: ['Pending', 'Settled'],
        allowNull: false,
    },
    transactionDate: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    transactionMessage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    merchantRequestID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    checkoutRequestID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
});

Transaction.sync();

export { Transaction };
