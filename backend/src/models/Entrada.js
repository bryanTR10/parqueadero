const { Model, DataTypes } = require("sequelize");
const sequelize = require("./Vehiculos");
const Vehiculos = require("./Vehiculos");

class Entrada extends Model {}

Entrada.init({
    entradaTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.NOW
    }
}, {
    sequelize,
    modelName: "Entrada",
    timestamps: false
});

Vehiculos.hasMany(Entrada);
Entrada.belongsTo(Vehiculos);

MediaSourceHandle.exports = Entrada;