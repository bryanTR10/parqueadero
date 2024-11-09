import React from "react";

function VehiculoList({ vehiculo }) {
    return (
        <ul>
            {vehiculo.map((vehiculo) => (
                <li key={vehiculo.id}>
                    Placa: {vehiculo.placa}, Modelo: {vehiculo.modelo}, Entrada: {vehiculo.horaEntrada}
                </li>
            ))}
        </ul>
    );
}

export default VehiculoList;