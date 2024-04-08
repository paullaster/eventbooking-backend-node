import { sequilize } from './dbConnection.js';
import { DataTypes } from 'sequelize';

const Image = sequilize.define('Image', {
    entryNo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    sourceID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    documentType: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Image.sync({});

export { Image };