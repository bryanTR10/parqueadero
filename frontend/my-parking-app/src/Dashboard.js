import React, { useState, useEffect } from "react";
import VehiculoForm from "./VehiculoForm";
import VehiculoList from "./VehiculoList";
import VehiculoHistoria from "./vehiculoHistoria";

function Dashboard() {
    const [vehiculo, setVehiculo] = useState([]);

    useEffect(() => {
        // Obtener los vehiculos de la base de datos
    }, []);

    const handleVehiculoSubmit = (newVehiculo) => {
        // Enviar el nuevo vehiculo al backend para guardarlo en la base de datos
        setVehiculo([...vehiculo, newVehiculo]);
    };

    return (
        <div>
            <h1>Gestion de parqueadero</h1>
            <VehiculoForm onVehiculoSubmit={handleVehiculoSubmit} />
            <VehiculoList Vehiculo={vehiculo} />
            <VehiculoHistoria />
        </div>
    );
}

export default Dashboard;