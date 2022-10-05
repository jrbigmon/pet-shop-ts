const {
    v4: idGenerator
} = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Breed = sequelize.define('Breed', {
        id: {
            type: DataTypes.STRING(500),
            primaryKey: true,
            allowNull: false,
            defaultValue: idGenerator()
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        domesticated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deleted_at'
        }
    }, {
        tableName: 'breeds',
        timestamps: true,
        paranoid: true
    })

    return Breed
}