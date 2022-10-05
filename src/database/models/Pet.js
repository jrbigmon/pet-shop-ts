const {
    v4: idGenerator
} = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
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
        age: {
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        needVaccine: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        vaccinated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        breedId: {
            type: DataTypes.STRING(500),
            foreignKey: true,
            allowNull: false,
            field: 'breed_id'
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
        tableName: 'pets',
        timestamps: true,
        paranoid: true
    })

    return Pet
}