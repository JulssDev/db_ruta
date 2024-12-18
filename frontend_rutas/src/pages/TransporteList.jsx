import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTransportes } from "../services/api";
import "../styles/App.css";

const TransporteList = () => {
  const navigate = useNavigate();
  const [transportes, setTransportes] = useState([]);
  const [showTransportes, setShowTransportes] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransporte, setSelectedTransporte] = useState(null); // Transporte seleccionado
  const [showModal, setShowModal] = useState(false); // Mostrar modal
  const itemsPerPage = 10;

  // Función para cargar los transportes
  const cargarTransportes = async () => {
    try {
      const data = await getTransportes();
      setTransportes(data);
      setShowTransportes(true);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error al obtener los transportes:", error.message);
    }
  };

  const totalPages = Math.ceil(transportes.length / itemsPerPage);
  const currentTransportes = transportes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Función para abrir el modal y asignar información adicional aleatoria
  const openModal = (transporte) => {
    const destinos = [
      "Parque Principal - Sede Principal",
      "Hospital - Sede el Rosario",
      "Plazuela - Casona",
      "Centro - Biblioteca",
      "Estación - Universidad"
    ];
    const horarios = [
      "6:00 AM - 8:00 AM",
      "8:00 AM - 10:00 AM",
      "10:00 AM - 12:00 PM",
      "2:00 PM - 4:00 PM",
      "4:00 PM - 6:00 PM"
    ];

    setSelectedTransporte({
      ...transporte,
      destino: destinos[Math.floor(Math.random() * destinos.length)],
      horario: horarios[Math.floor(Math.random() * horarios.length)]
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTransporte(null);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="logo">Sistema de Transporte</h1>
      </header>

      <section className="hero">
        <h1>Rutas Universidad de Pamplona</h1>
        <p>Administra, organiza y optimiza el transporte de manera fácil.</p>
      </section>

      <section className="crud-buttons">
        <div className="button-container">
          <button className="btn create-btn" onClick={() => navigate("/create")}>
            Crear Transporte
          </button>
          <button className="btn read-btn" onClick={cargarTransportes}>
            Ver Transporte
          </button>
          <button className="btn update-btn" onClick={() => navigate("/update/1")}>
            Actualizar Transporte
          </button>
          <button className="btn delete-btn" onClick={() => navigate("/delete/1")}>
            Eliminar Transporte
          </button>
        </div>
      </section>

      {showTransportes && (
        <section className="rutas-list">
          <h2>Listado de Transporte</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo Transporte</th>
                <th>Marca</th>
                <th>Capacidad</th>
                <th>Conductor</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {currentTransportes.map((transporte) => (
                <tr key={transporte.transporte_id}>
                  <td>{transporte.transporte_id}</td>
                  <td>{transporte.tipo_transporte_nombre}</td>
                  <td>{transporte.marca_nombre}</td>
                  <td>{transporte.capacidad}</td>
                  <td>{transporte.conductor_nombre}</td>
                  <td>
                    <button
                      className="btn info-btn"
                      onClick={() => openModal(transporte)}
                    >
                      Info
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Siguiente
            </button>
          </div>
        </section>
      )}

      {showModal && selectedTransporte && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Información del Transporte</h3>
            <p>
              <strong>ID:</strong> {selectedTransporte.transporte_id}
            </p>
            <p>
              <strong>Destino:</strong> {selectedTransporte.destino}
            </p>
            <p>
              <strong>Horario:</strong> {selectedTransporte.horario}
            </p>
            <button onClick={closeModal} className="btn delete-btn">
              Cerrar
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2024 Sistema de Transporte. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default TransporteList;
