import React, { Component, useState } from "react";
import Logo from '../components/Logo';
import "./LoginPage.css";

class LoginPage extends Component {

  async handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section id="Login" className="container mx-auto">
        <div className="wrapper flex flex-col max-w-full h-screen">
          <div className="form-container my-auto">
            <Logo />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  name="userEmail"
                  className="form-control"
                  defaultValue="{email}"
                  required="required"
                  title="Digite seu email"
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
                />
                <div className="form-control-feedback">
                  <button className="btn btn-rounded btn-light" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;
