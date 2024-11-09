import React, { useState } from "react";

function VehiculoForm ({ onVehiculoSubmit }) {
    const  [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");
    const [horaEntrada, setHoraEntrada] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onVehiculoSubmit({ placa, modelo, horaEntrada });
        setPlaca("");
        setModelo("");
        setHoraEntrada("");
    };

    return (
        <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <input type="text" placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        <input type="datetime-local" value={horaEntrada} onChange={(e) => setHoraEntrada(e.target.value)} />
        <button type="submit">Ingresar Vehículo</button>
      </form>
    );
}

 export default VehiculoForm;