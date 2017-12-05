module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.STRING
        },
        public: {
            type: DataTypes.BOOLEAN
        }
    });

    Event.associate = function (models) {
        //Event belongs to a user
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Event;
};