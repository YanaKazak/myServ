module.exports = (sequelize, DataTypes) => {
    return sequelize.define('test', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: {type: DataTypes.STRING},
        last_name: {type: DataTypes.STRING},
    }, {
        underscored: true,
        tableName: 'test',
        createdAt: 'created_at',
        updatedAt: 'updated_at',

    });
};
