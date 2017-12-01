module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING
    });

    User.associate = function(models) {
        //Associating an event with a user
        User.hasMany(models.Event, {
            onDelete: "cascade"
        });
    };

    return User;
};
