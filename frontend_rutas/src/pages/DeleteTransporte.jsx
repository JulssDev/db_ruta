import React, { useState } from "react";
import { deleteTransporte } from "../services/api";
import { useNavigate } from "react-router-dom";

const DeleteTransporte = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        await deleteTransporte(id);
        alert(`Transporte con ID ${id} eliminado exitosamente`);
        navigate("/");
      } catch (error) {
        alert("Error al eliminar el transporte: " + error.message);
      }
    } else {
      alert("Por favor, ingresa un ID válido.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Eliminar Transporte</h2>
      <input
        type="number"
        placeholder="ID del Transporte"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
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
