import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>Bienvenido a nuestro canal oficial de PQRS!</h1>
          <p>
            Tu opinión es fundamental para mejorar cada día. Estamos aquí para escucharte y
            responderte con transparencia y compromiso.
          </p>
        </div>

        <div className="login-right">
          <form className="login-form">
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Iniciar sesión</button>
            <button type="button" className="btn-secondary">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
