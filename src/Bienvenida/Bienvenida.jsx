import React from "react";
import "./Bienvenida.css";

const Bienvenida = () => {
  return (
    <div className="bienvenida-container">
      <div className="sidebar">
        <h2 className="menu-title">Menú</h2>
        <ul className="menu-list">
          <li>Petición</li>
          <li>Queja</li>
          <li>Reclamo</li>
          <li>Sugerencia</li>
          <li>Tu asistente</li>
          <li>Historial</li>
        </ul>
        <button className="logout-button">Cerrar sesión</button>
      </div>
      <div className="main-content">
        <h1>Bienvenido al sistema PQRS</h1>
        <p>
          Esta página está diseñada para facilitar la gestión de Peticiones,
          Quejas, Reclamos y Sugerencias (PQRS) relacionadas con el servicio de
          acueducto. Aquí podrás comunicarte directamente con nosotros, hacer
          seguimiento a tus solicitudes y contribuir a mejorar la calidad del
          servicio que prestamos a la comunidad.
        </p>
      </div>
    </div>
  );
};

export default Bienvenida;
