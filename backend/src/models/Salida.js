const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const Vehiculos = require("./Vehiculos");

class Salida extends Model {}

Salida.init({
    exitTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.NOW
  } 
}, {
    sequelize,
    modelName: "Exit",
    timestamps: false
});

Vehiculos.hastMany(Salida);
Salida.belogsTo(Vehiculos);

MediaSourceHandle.exports = Salida;