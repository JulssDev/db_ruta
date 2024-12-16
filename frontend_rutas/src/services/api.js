import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // URL del backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Obtener transportes
export const getTransportes = async () => {
  const response = await api.get("/transportes");
  return response.data;
};

// Crear transporte
export const createTransporte = async (data) => {
  const response = await api.post("/transportes", data);
  return response.data;
};

// Actualizar transporte
export const updateTransporte = async (id, data) => {
  const response = await api.put(`/transportes/${id}`, data);
  return response.data;
};

// Eliminar transporte
export const deleteTransporte = async (id) => {
  const response = await api.delete(`/transportes/${id}`);
  return response.data;
};
