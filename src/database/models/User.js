const {
    v4: idGenerator
} = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.STRING(500),
            primaryKey: true,
            allowNull: false,
            defaultValue: idGenerator()
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(400),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(500),
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
        tableName: 'users',
        timestamps: true,
        paranoid: true
    })

    return User
}