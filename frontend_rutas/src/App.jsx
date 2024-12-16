import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTransporte from "./pages/CreateTransporte";
import UpdateTransporte from "./pages/UpdateTransporte";
import DeleteTransporte from "./pages/DeleteTransporte";
import TransporteList from "./pages/TransporteList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<TransporteList />} />
        <Route path="/create" element={<CreateTransporte />} />
        <Route path="/update/:id" element={<UpdateTransporte />} />
        <Route path="/delete/:id" element={<DeleteTransporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
