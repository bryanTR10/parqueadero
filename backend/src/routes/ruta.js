const express = require("express");
const router = express.Router();
const Vehiculos = require("../models/Entrada");
const Salida = require("../models/Salida");

// Crear un nuevo vehiculo
router.post("/vehicles", async (req, res) => {
    try {
        const { plateNumber, model} = req.body;
        const newVehiculos = await Vehiculos.create({ plateNumber, model });
        res.status(201).json(newVehiculos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el vehiculo" });
    }
});

// Obtener todos los vehiculos
router.get("/vehiculos", async (req, res) => {
    try {
        const vehiculo = await Vehiculos.findAll();
        res.json(vehiculo);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener los vehiculos" });
    }
});
