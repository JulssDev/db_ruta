import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonGroup from "../components/ButtonGroup";

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="hero">
        <h1>Rutas Universidad de Pamplona</h1>
        <p>Administra, organiza y optimiza el transporte de manera fácil.</p>
        <ButtonGroup />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
