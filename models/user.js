module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING
    });

    Author.associate = function(models) {

        Author.hasMany(models.Event, {
            onDelete: "cascade"
        });
    };

    return User;
};
