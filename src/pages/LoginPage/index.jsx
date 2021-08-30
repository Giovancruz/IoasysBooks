import React, { useState } from "react";
import Logo from "components/Common/Logo";
import { useAuthContext } from "contexts/auth";

import "./styles.css";

const LoginPage = (props) => {
  const [userEmail, setEmail] = useState("");
  const [userPass, setPassword] = useState("");
  const [error, setError] = useState(false);
  const context = useAuthContext();

  const validLoginForm = () => {
    return userEmail.length > 0 && userPass.length > 0;
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (validLoginForm()) {
        const credentials = {
          email: userEmail,
          password: userPass,
        };
        const xhr = await context.SignIn(credentials);
        if (xhr.request.status === 401 || xhr.request.status === 500) {
          setError({
            error: true,
            message: xhr.response.data.errors.message,
          });
        }
      } else {
        setError({
          error: true,
          message: "Revise o preenchimento dos campos.",
        });
      }
    } catch (e) {
      setError(true);
    }
  }

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
