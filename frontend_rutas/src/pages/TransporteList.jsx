import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

const TransporteList = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Encabezado */}
      <header className="header">
        <h1 className="logo">Sistema de Transporte</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Rutas Universidad de Pamplonas</h1>
        <p>Administra, organiza y optimiza el transporte de manera fácil.</p>
      </section>

      {/* CRUD Buttons */}
      <section className="crud-buttons">
        <div className="button-container">
          <button
            className="btn create-btn"
            onClick={() => navigate("/create")}
          >
            Crear Ruta
          </button>
          <button
            className="btn read-btn"
            onClick={() => navigate("/")}
          >
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
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Sistema de Transporte. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default TransporteList;
