import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <button className="btn create-btn" onClick={() => navigate("/create")}>
        Crear Ruta
      </button>
      <button className="btn read-btn" onClick={() => navigate("/list")}>
        Ver Rutas
      </button>
      <button
        className="btn update-btn"
        onClick={() => navigate("/update/1")}
      >
        Actualizar Ruta
      </button>
      <button
        className="btn delete-btn"
        onClick={() => navigate("/delete/1")}
      >
        Eliminar Ruta
      </button>
    </div>
  );
};

export default ButtonGroup;
