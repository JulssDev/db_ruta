import React, { useEffect, useState } from "react";
import { getTransportes, createTransporte } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTransporte = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id_tipo_transporte: "",
    id_marca: "",
    id_horario: "",
    capacidad: "",
    id_conductor: "",
  });

  useEffect(() => {
    const cargarTransporte = async () => {
      const data = await getTransportes();
      const transporte = data.find((t) => t.id === parseInt(id));
      if (transporte) {
        setForm(transporte);
      }
    };
    cargarTransporte();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTransporte(form);
      alert("Transporte actualizado exitosamente");
      navigate("/");
    } catch (error) {
      alert("Error al actualizar transporte: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Actualizar Transporte</h2>
      <input
        type="number"
        name="id_tipo_transporte"
        placeholder="ID Tipo Transporte"
        value={form.id_tipo_transporte || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        name="id_marca"
        placeholder="ID Marca"
        value={form.id_marca || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        name="id_horario"
        placeholder="ID Horario"
        value={form.id_horario || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        name="capacidad"
        placeholder="Capacidad"
        value={form.capacidad || ""}
        onChange={handleChange}
      />
      <input
        type="number"
        name="id_conductor"
        placeholder="ID Conductor"
        value={form.id_conductor || ""}
        onChange={handleChange}
      />
      <button type="submit" className="btn update-btn">
        Actualizar
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

export default UpdateTransporte;
