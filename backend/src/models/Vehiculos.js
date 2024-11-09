const Sequelize = require("sequelize");
const sequelize = require("../db");

const Vehiculos = sequelize.define("Vehiculos", {
    plateNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    model: {
        type: Sequelize.STRING
    },
    // .. otros campos
});

module.exports = Vehiculos;