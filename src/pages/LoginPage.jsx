import React, { useState } from "react";
import Logo from "../components/Logo";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validLoginForm()) {
  }
  };

    return (
      <section id="Login" className="container mx-auto">
        <div className="wrapper flex flex-col max-w-full h-screen">
          <div className="form-container my-auto">
          <Logo componentClass="mb-10" />
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  name="userEmail"
                  className="form-control"
                  defaultValue="{email}"
                  required="required"
                  title="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group relative">
                <label htmlFor="userPassword">Senha</label>
                <input
                  type="password"
                  name="userPassword"
                  className="form-control"
                  required="required"
                  title="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-control-feedback">
                  <button className="btn btn-rounded btn-light" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            <div className="login-error">Email e/ou Senha incorretos.</div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default LoginPage;
