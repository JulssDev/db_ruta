import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // baseURL que ya incluye '/api'
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// Obtener transportes
export const getTransportes = async () => {
  const response = await api.get("/transportes"); // Llamada al endpoint
  return response.data; // Retorna la lista de transportes
};

// Crear transporte
// Crear transporte
export const createTransporte = async (data) => {
  const response = await api.post("/transportes", {
    transporte_id: data.transporte_id,
    id_tipo_transporte: data.id_tipo_transporte,
    id_marca: data.id_marca,
    id_horario: data.id_horario,
    capacidad: data.capacidad,
    id_conductor: data.id_conductor,
  });
  return response.data;
};


// Actualizar transporte
export const updateTransporte = async (transporte_id, data) => {
  const response = await api.put(`/transportes/${transporte_id}`, data); // Evita duplicar '/api'
  return response.data;
};


export const deleteTransporte = async (transporte_id) => {
  const response = await api.delete(`/api/transportes/${transporte_id}`);
  return response.data;
};

