import React, { useState } from "react";
import { createTransporte } from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateTransporte = () => {
  const [form, setForm] = useState({
    transporte_id: "", // Nuevo campo
    id_tipo_transporte: "",
    id_marca: "",
    id_horario: "",
    capacidad: "",
    id_conductor: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTransporte({
        transporte_id: parseInt(form.transporte_id), // Campo nuevo añadido
        id_tipo_transporte: parseInt(form.id_tipo_transporte),
        id_marca: parseInt(form.id_marca),
        id_horario: parseInt(form.id_horario),
        capacidad: parseInt(form.capacidad),
        id_conductor: parseInt(form.id_conductor),
      });
      alert("Transporte creado exitosamente");
      navigate("/");
    } catch (error) {
      alert("Error al crear transporte: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Crear Nuevo Transporte</h2>
      <input
        type="number"
        name="transporte_id"
        placeholder="ID del Transporte" // Nuevo campo
        value={form.transporte_id}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="id_tipo_transporte"
        placeholder="ID Tipo Transporte"
        value={form.id_tipo_transporte}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="id_marca"
        placeholder="ID Marca"
        value={form.id_marca}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="id_horario"
        placeholder="ID Horario"
        value={form.id_horario}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="capacidad"
        placeholder="Capacidad"
        value={form.capacidad}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="id_conductor"
        placeholder="ID Conductor"
        value={form.id_conductor}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn create-btn">
        Guardar
      </button>
      <button
        type="button"
        className="btn delete-btn"
        onClick={() => navigate("/")}
      >
        Cancelar
      </button>
    </form>
  );
};

export default CreateTransporte;
