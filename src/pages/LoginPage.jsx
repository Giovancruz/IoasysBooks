import React, { useState } from "react";
import Logo from "../components/Logo";
import { SignIn } from "../services/api";

import "./LoginPage.css";

const LoginPage = (props) => {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPassword] = useState("");
  const [error, setError] = useState(false);

  const validLoginForm = () => {
    return userEmail.length > 0 && userPass.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validLoginForm()) {
      const credentials = {
        email: userEmail,
        password: userPass,
      };
        SignIn(credentials).then((xhr) => {
          if (xhr.request.status === 200) {
            setError(false);

            
          } else {
            setError({
              error: true,
              message: xhr.response.data.errors.message,
            });
          }
        });
    } else {
      setError({
        error: true,
        message: "Os campos Email e Senha são obrigatórios.",
      });
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
            {error ? <div className="login-error">{error.message}</div> : ""}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
