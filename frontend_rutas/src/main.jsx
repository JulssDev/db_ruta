import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransporteList from "./pages/TransporteList";
import CreateTransporte from "./pages/CreateTransporte";
import UpdateTransporte from "./pages/UpdateTransporte";
import DeleteTransporte from "./pages/DeleteTransporte";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TransporteList />} />
      <Route path="/create" element={<CreateTransporte />} />
      <Route path="/update/:id" element={<UpdateTransporte />} />
      <Route path="/delete/:id" element={<DeleteTransporte />} />
    </Routes>
  </BrowserRouter>
);
