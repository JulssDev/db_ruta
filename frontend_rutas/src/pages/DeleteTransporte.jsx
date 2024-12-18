import React, { useState } from "react";
import { deleteTransporte } from "../services/api";
import { useNavigate } from "react-router-dom";

const DeleteTransporte = () => {
  const [id, setId] = useState("");
  const [error, setError] = useState(""); // Estado para manejar errores
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id || isNaN(id) || parseInt(id) <= 0) {
      setError("Por favor, ingresa un ID válido (número positivo).");
      return;
    }

    const confirmDelete = window.confirm(
      `¿Estás seguro de que deseas eliminar el transporte con ID ${id}?`
    );

    if (confirmDelete) {
      try {
        await deleteTransporte(id); // Llamada a la API
        alert(`Transporte con ID ${id} eliminado exitosamente.`);
        navigate("/"); // Redirigir a la página principal
      } catch (error) {
        console.error("Error al eliminar el transporte:", error.response?.data || error.message);
        if (error.response?.status === 404) {
          setError("Error: El transporte con este ID no existe.");
        } else {
          setError("Error: No se pudo eliminar el transporte. Intenta nuevamente.");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Eliminar Transporte</h2>
      <input
        type="number"
        placeholder="ID del Transporte"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
          setError(""); // Limpiar errores al cambiar la entrada
        }}
        required
        min="1"
      />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar errores */}

      <button type="submit" className="btn delete-btn">
        Eliminar
      </button>
      <button
        type="button"
        className="btn update-btn"
        onClick={() => navigate("/")}
      >
        Cancelar
      </button>
    </form>
  );
};

export default DeleteTransporte;
