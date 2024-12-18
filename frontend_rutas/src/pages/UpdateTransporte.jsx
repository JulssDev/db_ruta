import React, { useEffect, useState } from "react";
import { getTransportes, updateTransporte } from "../services/api";
import { useNavigate } from "react-router-dom";

const UpdateTransporte = () => {
  const navigate = useNavigate();

  const [idsDisponibles, setIdsDisponibles] = useState([]);
  const [form, setForm] = useState({
    transporte_id: "",
    id_marca: "",
    id_tipo_transporte: "",
    capacidad: "",
    id_conductor: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarTransportes = async () => {
      try {
        const data = await getTransportes();
        setIdsDisponibles(data.map((t) => t.transporte_id));
      } catch (error) {
        console.error("Error al cargar IDs de transportes:", error.message);
      }
    };
    cargarTransportes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "transporte_id" && !idsDisponibles.includes(parseInt(value))) {
      setError("ID no existe. Seleccione un ID válido.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) return alert("Corrige los errores antes de enviar.");
    try {
      const updatedData = {
        id_marca: parseInt(form.id_marca),
        id_tipo_transporte: parseInt(form.id_tipo_transporte),
        capacidad: parseInt(form.capacidad),
        id_conductor: parseInt(form.id_conductor),
      };
      await updateTransporte(form.transporte_id, updatedData);
      alert("Transporte actualizado exitosamente");
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar transporte:", error.message);
      alert("Error al actualizar transporte. Verifica los datos.");
    }
  };

  return (
    <div className="update-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Actualizar Transporte</h2>

        <div className="form-group">
          <label>ID del Transporte</label>
          <select
            name="transporte_id"
            value={form.transporte_id}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecciona un ID
            </option>
            {idsDisponibles.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Marca</label>
          <input
            type="number"
            name="id_marca"
            placeholder="ID de la Marca"
            value={form.id_marca}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de Transporte</label>
          <select
            name="id_tipo_transporte"
            value={form.id_tipo_transporte}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecciona el Tipo de Transporte
            </option>
            <option value="1">Autobús</option>
            <option value="2">Carro</option>
          </select>
        </div>

        <div className="form-group">
          <label>Capacidad</label>
          <input
            type="number"
            name="capacidad"
            placeholder="Capacidad"
            value={form.capacidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>ID del Conductor</label>
          <input
            type="number"
            name="id_conductor"
            placeholder="ID del Conductor"
            value={form.id_conductor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
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
        </div>
      </form>
    </div>
  );
};

export default UpdateTransporte;
