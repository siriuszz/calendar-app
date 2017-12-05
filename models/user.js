module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        name: DataTypes.STRING
    });

    Users.associate = function(models) {
        //Associating an event with a user
        Users.hasMany(models.Event, {
            onDelete: "cascade"
        });
    };

    return Users;
};
