const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'KeyValue',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER.UNSIGNED,
                alllowNull: false,
                primaryKey: true,
            },
            key: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            value: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'KeyValue',
            timestamps: false,
            indexex: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'key',
                    unique: true,
                    fields: [{ name: 'key'}],
                },
            ],
        },
    );
};
    