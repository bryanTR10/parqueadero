import axios from "axios";

const baseUrl = "http://localhost:3000"; 

const getVehiculos = async () => {
    const response = await axios.get ("${baseUrl}/vehiculos");
    return response.data;
}; 

 const createVehiculos = async (vehiculosData) => {
    const response = await axios.post(`${baseUrl}/vehiculos`, vehiculosData);
   return response.data;
 };

 export { getVehiculos, createVehiculos };